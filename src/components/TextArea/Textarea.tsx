import { ComponentPropsWithoutRef } from "react";
import styles from "./Textarea.module.scss";
import { TextareaVariants, textareaVariants } from "./textareaVariants";
import clsx from "clsx";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  TextareaVariants & {
    label?: string;
    condition?: "active" | "disabled";
    onChange: (value: string) => void;
  };

export const Textarea = ({
  label,
  condition = "active",
  onChange,
  background,
  height,
  resize,
  className,
  ...props
}: TextareaProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.root}>
      <textarea
        {...props}
        disabled={condition == "disabled" ? true : false}
        autoComplete="off"
        id={label}
        className={textareaVariants({ background, height, resize })}
        onChange={handleInputChange}
        placeholder=" "
      ></textarea>
      <label
        htmlFor={label}
        className={clsx(
          styles.label,
          background == "main" && styles.main_color,
          background == "second" && styles.second_color,
          background == "item" && styles.item_color,
          condition == "disabled" && styles.disabled
        )}
      >
        {label}
      </label>
    </div>
  );
};
