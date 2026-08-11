import { Link, type Path } from "react-router";

import styles from "./menu-button.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  to: string | Path;
  className: string;
};

const MenuButton = ({
  children,
  variant = "primary",
  className,
  to,
}: Props) => {
  return (
    <Link
      className={`${className ? className : ""} ${styles.menuButton} ${styles[variant]}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuButton;
