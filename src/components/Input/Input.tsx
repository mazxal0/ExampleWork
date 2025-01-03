import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.scss";
import { InputVariants, inputVariants } from "./inputVariants";
import clsx from "clsx";

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <div className={styles.root}>
      <input
        {...props}
        onChange={handleInputChange}
        className={inputVariants({ variant, background })}
        type="text"
        placeholder=""
      />
      <label
        htmlFor={label}
        className={clsx(
          styles.label,
          variant == "large" && styles.label_large,
          variant == "medium" && styles.label_medium,
          variant == "small" && styles.label_small,
          background == "main" && styles.main_color,
          background == "second" && styles.second_color,
          background == "item" && styles.item_color
        )}
      >
        {label}
      </label>
    </div>
  );
};
