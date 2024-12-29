import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Input.module.scss";

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputVariants = cva(styles.input, {
  variants: {
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
  defaultVariants: {
    size: "large",
  },
});
