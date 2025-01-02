import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.scss";
import { InputVariants, inputVariants } from "./inputVariants";

type InputProps = ComponentPropsWithoutRef<"input"> &
  InputVariants & {
    label?: string;
    onChange: (value: string) => void;
  };

export const Input = ({
  label,
  onChange,
  variant,
  background,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={styles.root}>
      <input
        {...props}
        className={inputVariants({ variant, background })}
        type="text"
        placeholder=""
      />
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
