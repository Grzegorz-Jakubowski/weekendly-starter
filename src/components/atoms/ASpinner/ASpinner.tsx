import "./ASpinner.scss";

type SpinnerProps = {
  title?: string;
  className?: string;
};

export const ASpinner = ({ title, className = "" }: SpinnerProps) => (
  <span
    role={title ? "img" : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    className={["spinner", className].join(" ").trim()}
  />
);
