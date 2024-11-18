import { ComponentPropsWithoutRef } from "react";
import { ButtonVariants, buttonVariants } from "./buttonVariants";

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonVariants;

export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant, size, className })}>
      {children}
    </button>
  );
};
