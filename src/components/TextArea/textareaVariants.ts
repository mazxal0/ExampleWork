import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Textarea.module.scss";

export type TextareaVariants = VariantProps<typeof textareaVariants>;

export const textareaVariants = cva(styles.textarea, {
  variants: {
    height: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      none: styles.none_height,
    },
    background: {
      main: styles.main_color,
      second: styles.second_color,
      item: styles.item_color,
    },
    resize: {
      both: styles.both,
      horizontal: styles.horizontal,
      vertical: styles.vertical,
      none: styles.none_resize,
    },
  },
  defaultVariants: {
    height: "medium",
    background: "main",
    resize: "both",
  },
});
