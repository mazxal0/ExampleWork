import {cva, type VariantProps} from "class-variance-authority";
import styles from "./FloatButton.module.scss";

export type FloatButtonVariants = VariantProps<typeof floatButtonVariants>;

export const floatButtonVariants = cva(styles.float_button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    position: {
      left: styles.left,
      center: styles.center,
      right: styles.right,
    },
    typeFloatButton: {
      text: styles.text,
      opening: styles.opening,
      scrollingToTop: styles.scrolling_to_top,
    },
    floatButtonText: {
      button: "button",
    },
  },
  defaultVariants: {
    variant: "primary",
    position: "right",
    typeFloatButton: "scrollingToTop",
    floatButtonText: "button",
  }
});
