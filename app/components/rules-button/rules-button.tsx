import { Link } from "react-router";

import styles from "./rules-button.module.css";

type Props = {
  to:
    | string
    | {
        pathname: string;
        search: string;
        hash: string;
      };
};

export const RulesButton = ({ to }: Props) => {
  return (
    <Link to={to}>
      <button className={styles.rulesButton} />
    </Link>
  );
};
