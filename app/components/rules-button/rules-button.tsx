import { Link, type Path } from "react-router";

import styles from "./rules-button.module.css";

type Props = {
  to: string | Path;
};

export const RulesButton = ({ to }: Props) => {
  return <Link to={to} className={styles.rulesButton} />;
};
