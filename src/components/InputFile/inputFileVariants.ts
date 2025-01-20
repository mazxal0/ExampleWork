import { cva, type VariantProps } from "class-variance-authority";
import styles from "./InputFile.module.scss";

export type InputFileVariants = VariantProps<typeof inputFileVariants>;

export const inputFileVariants = cva(styles.input, {
  variants: {
    variant: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
    background: {
      main: styles.main_color,
      second: styles.second_color,
      item: styles.item_color
    },
    condition: {
      disabled: styles.disabled,
      active: styles.active
    }
  },
  defaultVariants: {
    variant: "medium",
    background: "main",
    condition: "active"
  },
});
