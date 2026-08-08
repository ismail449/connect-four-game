import { type ComponentPropsWithoutRef } from "react";

import styles from "./menu-button.module.css";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
};

const MenuButton = ({
  children,
  variant = "primary",
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={`${className ? className : ""} ${styles.menuButton} ${styles[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MenuButton;
