import React, { ComponentPropsWithoutRef } from "react";
import styles from "./Spinner.module.scss";
import { SpinnerVariants, spinnerVariants } from "./spinnerVariants";

type SpinnerProps = ComponentPropsWithoutRef<"button"> & SpinnerVariants;

export const Spinner = ({ type, color, size, className }: SpinnerProps) => {
  return (
    <div className={styles.spinner}>
      <div className={spinnerVariants({ type, color, size, className })}></div>
    </div>
  );
};
