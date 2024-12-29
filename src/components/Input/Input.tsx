import { ComponentPropsWithoutRef, FC } from "react";
import styles from "./Input.module.scss";
import { InputVariants, inputVariants } from "./inputVariants";

export type InputProps = {
  label: string;
  // icon?: React.ReactNode;
  onChange: (value: string) => void;
};

type InputCvaProps = ComponentPropsWithoutRef<"input"> & InputVariants;

export const Input: FC<InputProps> = ({ label }) => {
  return (
    <div className={styles.root}>
      <input className={styles.input} type="text" placeholder=" " />
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
