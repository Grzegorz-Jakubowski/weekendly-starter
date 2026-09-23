import type { ReactNode } from "react";
import "./ABadge.scss";

export type BadgeTone = "neutral" | "green" | "violet" | "orange" | "blue";

type BadgeProps = {
  tone?: BadgeTone;
  children: ReactNode;
};

export const ABadge = ({ tone = "neutral", children }: BadgeProps) => (
  <span className={tone === "neutral" ? "badge" : `badge badge--${tone}`}>{children}</span>
);
