import { type ComponentProps } from "react";

import styles from "./navigation-button.module.css";

type Props = ComponentProps<"button"> & {};

export const NavigationButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.navigationButton} {...props}>
      {children}
    </button>
  );
};
