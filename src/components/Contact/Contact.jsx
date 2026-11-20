import { useState } from "react";
import emailjs from "@emailjs/browser";
import { companyInfo, contactFormFields } from "../../data/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "../Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.company.trim()) next.company = "Company name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(formData.email)) next.email = "Please enter a valid email";
    if (!formData.phone.trim()) next.phone = "Phone number is required";
    else if (formData.phone.length < 10) next.phone = "Please enter a valid phone number";
    if (!formData.service) next.service = "Please select a service";
    if (!formData.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validateForm();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .send(
        "service_wj1qll9",
        "template_pvtw0fs",
        {
          from_name: formData.name,
          company_name: formData.company,
          from_email: formData.email,
          phone_number: formData.phone,
          service_required: formData.service,
          message: formData.message,
          to_email: companyInfo.formInbox,
        },
        "y6w8HaeZWHt3sVoXM"
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError(
          "Failed to send message. Please try again or contact us directly at " +
            companyInfo.email
        );
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <Reveal className="section-header">
          <p className="section-subtitle">Get in touch</p>
          <h2 className="section-title">Contact us</h2>
          <p className="text-slate-300">Tell us about the system, product, or store you need to move forward.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl">
          <Reveal variant="left">
            <div className="card mb-6">
              <h3 className="text-2xl mb-6">Start a conversation</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <FaEnvelope className="text-primary mt-1" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-slate-400 hover:text-accent">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaPhone className="text-primary mt-1" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href={`tel:${companyInfo.phone}`} className="text-slate-400 hover:text-accent">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-400">{companyInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary-deep to-primary p-8 text-ink">
              <p className="text-lg leading-relaxed font-medium">
                Partner with Nexapro Technologies — 6+ years in AI/ML and mobile,
                10+ years on mainframe, AS/400, and COBOL, plus full-stack web
                and commerce, delivered to a secure infrastructure quality standard.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <div className="card">
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200">
                  Thank you. Your message has been sent. We will reply shortly.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-400/30 text-red-200">
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  ["name", "Name", "text", "Your name"],
                  ["company", "Company name", "text", "Your company"],
                  ["email", "Email address", "email", "you@company.com"],
                  ["phone", "Phone number", "tel", "+91-XXXXXXXXXX"],
                ].map(([name, label, type, placeholder]) => (
                  <div key={name}>
                    <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
                      {label} *
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`input-field ${errors[name] ? "border-red-400" : ""}`}
                      placeholder={placeholder}
                    />
                    {errors[name] && <p className="text-red-400 text-sm mt-1">{errors[name]}</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`input-field select-dark ${errors.service ? "border-red-400" : ""}`}
                  >
                    <option value="">Select a service</option>
                    {contactFormFields
                      .find((field) => field.name === "service")
                      .options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`textarea-field ${errors.message ? "border-red-400" : ""}`}
                    placeholder="Tell us about your project..."
                    rows="4"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
