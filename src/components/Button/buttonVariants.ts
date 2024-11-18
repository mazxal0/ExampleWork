import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.scss";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "large",
  },
});
