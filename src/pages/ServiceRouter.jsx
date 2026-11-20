import { useParams } from "react-router-dom";
import { divisions, getService } from "../data/services";
import ServicePage from "./ServicePage";
import DivisionPage from "./DivisionPage";
import NotFound from "./NotFound";

export default function ServiceRouter() {
  const { slug } = useParams();
  const division = Object.values(divisions).find((d) => d.slug === slug);
  if (division) return <DivisionPage key={slug} division={division} />;
  const service = getService(slug);
  if (service) return <ServicePage key={slug} service={service} />;
  return <NotFound />;
}
