import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Input.module.scss";

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputVariants = cva(styles.input, {
  variants: {
    variant: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
    background: {
      main: styles.main_color,
      second: styles.second_color,
      item: styles.item_color,
    },
  },
  defaultVariants: {
    variant: "medium",
    background: "item",
  },
});
