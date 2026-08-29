import { Link } from "react-router";

import Logo from "~/assets/icons/Logo.svg?react";

import { NavigationButton } from "../navigation-button/navigation-button";
import PauseMenu from "../pause-menu/pause-menu";
import styles from "./in-game-nav-bar.module.css";

export default function InGameNaveBar() {
  const handleGameRestart = () => {
    console.log("restart game!");
  };

  return (
    <nav className={styles.inGameNavBar}>
      <PauseMenu />
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <NavigationButton onClick={handleGameRestart}>Restart</NavigationButton>
    </nav>
  );
}
