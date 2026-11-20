import { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { budgetRanges, companyInfo, contactFormFields, contactMethods, projectTypes } from "../../data/content";
import Icon from "../Icon";

// ---------------------------------------------------------------------------
// EXISTING SUBMISSION PIPELINE — PRESERVED
// These are the same EmailJS service, template and public key used by the
// original site, and the same template parameter names. New fields are folded
// into `message` so they appear in the existing email template without any
// change on the EmailJS dashboard. They are also sent as extra parameters in
// case the template is later updated to use them directly.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "service_wj1qll9";
const EMAILJS_TEMPLATE_ID = "template_pvtw0fs";
const EMAILJS_PUBLIC_KEY = "y6w8HaeZWHt3sVoXM";

const serviceOptions = contactFormFields.find((f) => f.name === "service").options;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 2500; // spam protection: humans take longer than this

const emptyProject = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  projectType: "",
  message: "",
  budget: "",
  contactMethod: "Email",
};
const emptyCareer = { name: "", email: "", phone: "", role: "", experience: "", resume: "", message: "" };

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[13.5px] font-medium text-white">
        <span>
          {label} {required ? <span className="text-primary" aria-hidden="true">*</span> : <span className="font-normal text-slate-500">(optional)</span>}
        </span>
        {hint && <span className="text-[12px] font-normal text-slate-500">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Project inquiry / quote / careers form.
 * variant: "project" (default) | "career"
 */
export default function Contact({ variant = "project", defaultService = "", submitLabel, compact = false }) {
  const isCareer = variant === "career";
  const initial = useMemo(
    () => (isCareer ? { ...emptyCareer } : { ...emptyProject, service: defaultService }),
    [isCareer, defaultService]
  );
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(Date.now());
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Please enter your full name.";
    if (!formData.email.trim()) next.email = "Please enter your email address.";
    else if (!emailRegex.test(formData.email)) next.email = "Please enter a valid email address.";
    const digits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) next.phone = "Please enter a phone number.";
    else if (digits.length < 10) next.phone = "Please enter a valid phone number (at least 10 digits).";
    if (isCareer) {
      if (!formData.role.trim()) next.role = "Which role or skill area are you applying for?";
      if (formData.resume && !/^https?:\/\/\S+$/i.test(formData.resume.trim()))
        next.resume = "Please paste a full link starting with https://";
    } else {
      if (!formData.company.trim()) next.company = "Please enter your company name.";
      if (!formData.service) next.service = "Please select a service.";
      if (!formData.projectType) next.projectType = "Please select a project type.";
      if (formData.message.trim().length < 15) next.message = "Please describe your project in a sentence or two (15+ characters).";
    }
    return next;
  };

  const buildPayload = () => {
    if (isCareer) {
      const message = [
        `CAREER APPLICATION`,
        `Role / area: ${formData.role}`,
        `Experience: ${formData.experience || "—"}`,
        `Resume / profile link: ${formData.resume || "— (will email resume)"}`,
        "",
        formData.message || "",
        "",
        `— Submitted from ${window.location.href}`,
      ].join("\n");
      return {
        from_name: formData.name,
        company_name: "Careers application",
        from_email: formData.email,
        phone_number: formData.phone,
        service_required: `Careers — ${formData.role}`,
        message,
        to_email: companyInfo.formInbox,
        role: formData.role,
        resume_link: formData.resume,
      };
    }
    const message = [
      formData.message,
      "",
      "— Project details —",
      `Project type: ${formData.projectType}`,
      `Estimated budget: ${formData.budget || "Not specified"}`,
      `Preferred contact method: ${formData.contactMethod}`,
      `Submitted from: ${window.location.href}`,
    ].join("\n");
    return {
      // original template parameters
      from_name: formData.name,
      company_name: formData.company,
      from_email: formData.email,
      phone_number: formData.phone,
      service_required: formData.service,
      message,
      to_email: companyInfo.formInbox,
      // additional parameters
      project_type: formData.projectType,
      budget: formData.budget,
      contact_method: formData.contactMethod,
      page_url: window.location.href,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      const first = formRef.current?.querySelector(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }

    // Spam protection: hidden honeypot field + minimum fill time (checked after
    // validation so real users always see field errors first).
    if (honeypot || Date.now() - startedAt.current < MIN_FILL_MS) {
      setStatus("success"); // silently accept bots without sending
      return;
    }

    setStatus("sending");
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildPayload(), EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData(initial);
        startedAt.current = Date.now();
      })
      .catch(() => setStatus("error"));
  };

  const input = (name, type = "text", placeholder = "", extra = {}) => (
    <input
      id={`f-${variant}-${name}`}
      name={name}
      type={type}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      aria-invalid={!!errors[name]}
      aria-describedby={errors[name] ? `f-${variant}-${name}-error` : undefined}
      className={`input-field ${errors[name] ? "field-error" : ""}`}
      {...extra}
    />
  );
  const id = (name) => `f-${variant}-${name}`;

  if (status === "success") {
    return (
      <div className="pop-in rounded-lg border border-phosphor/30 bg-phosphor/[0.06] p-8" role="status" aria-live="polite">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-phosphor/15 text-phosphor">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl text-white">{isCareer ? "Application received." : "Thank you — your requirement is with our team."}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-slate-300">
          {isCareer
            ? "We review every application. If your resume link was not included, please email it to "
            : "We will get back to you shortly. If it is urgent, you can also reach us at "}
          <a href={`mailto:${companyInfo.email}`} className="text-primary-soft underline underline-offset-4">
            {companyInfo.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6 !py-2.5">
          Send another {isCareer ? "application" : "inquiry"}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5" aria-label={isCareer ? "Career application" : "Project inquiry"}>
      {status === "error" && (
        <div className="rounded-md border border-red-400/30 bg-red-500/10 p-4 text-[14px] text-red-200" role="alert">
          We could not send your message. Please try again, or contact us directly at{" "}
          <a className="underline" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a> or{" "}
          <a className="underline" href={`tel:${companyInfo.phoneHref}`}>{companyInfo.phone}</a>.
        </div>
      )}

      {/* honeypot — hidden from people, visible to naive bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} name="website" />
        </label>
      </div>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field id={id("name")} label="Full name" required error={errors.name}>
          {input("name", "text", "Your full name", { autoComplete: "name" })}
        </Field>
        <Field id={id("email")} label={isCareer ? "Email" : "Business email"} required error={errors.email}>
          {input("email", "email", "you@company.com", { autoComplete: "email" })}
        </Field>
        <Field id={id("phone")} label="Phone number" required error={errors.phone}>
          {input("phone", "tel", "+91 XXXXX XXXXX", { autoComplete: "tel" })}
        </Field>
        {isCareer ? (
          <Field id={id("role")} label="Role / skill area" required error={errors.role}>
            {input("role", "text", "e.g. RPGLE Developer, Flutter Developer")}
          </Field>
        ) : (
          <Field id={id("company")} label="Company name" required error={errors.company}>
            {input("company", "text", "Your company", { autoComplete: "organization" })}
          </Field>
        )}
      </div>

      {isCareer ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={id("experience")} label="Experience" error={errors.experience}>
              {input("experience", "text", "e.g. 4 years")}
            </Field>
            <Field id={id("resume")} label="Resume / LinkedIn link" error={errors.resume} hint="Drive, Dropbox or LinkedIn">
              {input("resume", "url", "https://")}
            </Field>
          </div>
          <Field id={id("message")} label="Tell us about yourself" error={errors.message}>
            <textarea
              id={id("message")}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Key skills, recent projects, notice period…"
              className="textarea-field"
            />
          </Field>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={id("service")} label="Service interested in" required error={errors.service}>
              <select
                id={id("service")}
                name="service"
                value={formData.service}
                onChange={handleChange}
                aria-invalid={!!errors.service}
                className={`input-field [&>option]:text-ink ${errors.service ? "field-error" : ""}`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id={id("projectType")} label="Project type" required error={errors.projectType}>
              <select
                id={id("projectType")}
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                aria-invalid={!!errors.projectType}
                className={`input-field [&>option]:text-ink ${errors.projectType ? "field-error" : ""}`}
              >
                <option value="">Select project type</option>
                {projectTypes.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field id={id("message")} label="Brief project description" required error={errors.message}>
            <textarea
              id={id("message")}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? `${id("message")}-error` : undefined}
              placeholder="What problem are you trying to solve? Which systems are involved? Any timelines?"
              className={`textarea-field ${errors.message ? "field-error" : ""}`}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={id("budget")} label="Estimated budget">
              <select id={id("budget")} name="budget" value={formData.budget} onChange={handleChange} className="input-field [&>option]:text-ink">
                <option value="">Select a range</option>
                {budgetRanges.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <fieldset>
              <legend className="mb-2 text-[13.5px] font-medium text-white">
                Preferred contact method <span className="text-primary" aria-hidden="true">*</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {contactMethods.map((m) => (
                  <label
                    key={m}
                    className={`cursor-pointer rounded-md border px-3 py-2 text-[13px] transition ${
                      formData.contactMethod === m ? "border-primary bg-primary/10 text-white" : "border-white/10 text-slate-300 hover:border-white/25"
                    }`}
                  >
                    <input type="radio" name="contactMethod" value={m} checked={formData.contactMethod === m} onChange={handleChange} className="sr-only" />
                    {m}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] text-slate-500">
          <span className="text-primary">*</span> Required. {isCareer ? "We only use your details for recruitment." : "Initial consultation is free of cost."}
        </p>
        <button type="submit" disabled={status === "sending"} className="btn-primary min-w-[200px] disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              {submitLabel || (isCareer ? "Submit application" : "Send my requirement")} <Icon name="arrow" className="arrow" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
