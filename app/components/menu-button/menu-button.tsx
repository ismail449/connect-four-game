import type { ComponentProps } from "react";
import { Link, type Path } from "react-router";

import styles from "./menu-button.module.css";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
};

type LinkProps = BaseProps & {
  to: string | Path;
};

type ButtonProps = BaseProps & ComponentProps<"button"> & { to?: never };

type Props = LinkProps | ButtonProps;

const MenuButton = (props: Props) => {
  const {
    children,
    variant = "primary",
    className,
    to,
    ...buttonProps
  } = props;

  const classes = [className, styles.menuButton, styles[variant]]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
};

export default MenuButton;
