import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Spinner.module.scss";

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;

export const spinnerVariants = cva(styles.root, {
  variants: {
    type: {
      // ring: styles.ring,
      tailspin: styles.tailspin,
    },
    color: {
      primary: styles.primary,
      white: styles.white,
      black: styles.black,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      x_large: styles.x_large,
    },
  },
  defaultVariants: {
    type: "tailspin",
    color: "primary",
    size: "medium",
  },
});
