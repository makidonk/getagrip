import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return <li>{children}</li>;
}
