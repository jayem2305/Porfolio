import type { ComponentType, SVGProps } from "react";
import {
  SiLaravel,
  SiVuedotjs,
  SiPython,
  SiMysql,
  SiStripe,
  SiBootstrap,
  SiFigma,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiDrupal,
} from "react-icons/si";
import { Database, Briefcase, GraduationCap, Store, Smartphone } from "lucide-react";
import type { Project } from "@/lib/data";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const skillIcons: Record<string, IconComponent> = {
  Laravel: SiLaravel,
  Vue: SiVuedotjs,
  Xano: Database,
  Python: SiPython,
  MySQL: SiMysql,
  Stripe: SiStripe,
  Bootstrap: SiBootstrap,
  Figma: SiFigma,
  Flutter: SiFlutter,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Drupal: SiDrupal,
};

export const categoryIcons: Record<Project["category"], IconComponent> = {
  Work: Briefcase,
  Personal: Store,
  Academic: GraduationCap,
  Mobile: Smartphone,
};
