import type { ComponentPropsWithRef } from "react";
import "./AButton.scss";
import { buttonStyles, type ButtonVariant } from "./buttonStyles";
import { ASpinner } from "../ASpinner/ASpinner";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const AButton = ({
  children,
  variant = "primary",
  isLoading = false,
  isDisabled = false,
  disabled = false,
  className,
  type = "button",
  ...buttonProps
}: ButtonProps) => (
  <button
    {...buttonProps}
    type={type}
    disabled={disabled || isDisabled || isLoading}
    aria-busy={isLoading || undefined}
    className={buttonStyles({ variant, className })}
  >
    {isLoading && <ASpinner />}
    {children}
  </button>
);
