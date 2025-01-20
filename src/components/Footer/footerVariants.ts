import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Footer.module.scss";

export type FooterVariants = VariantProps<typeof footerVariants>;

export const footerVariants = cva(styles.footer, {
  variants: {
  },
  defaultVariants: {
  },
});
