import Logo from "~/assets/icons/Logo.svg?react";
import PlayerVSPlayerIcon from "~/assets/icons/player-vs-player.svg?react";
import MenuButton from "~/components/menu-button/menu-button";

import styles from "./index.module.css";

export function meta() {
  return [
    { title: "Connect Four" },
    { name: "description", content: "Welcome to connect four" },
  ];
}

export default function MainMenu() {
  return (
    <div className={styles.mainMenuPage}>
      <div className={styles.mainMenu}>
        <Logo className={styles.logo} />
        <div className={styles.menuButtons}>
          <MenuButton to="/in-game" className={styles.mainMenuButton}>
            <span>PLAY VS PLAYER</span>{" "}
            <PlayerVSPlayerIcon className={styles.playerVSPlayerIcon} />
          </MenuButton>
          <MenuButton
            to="/rules"
            variant="secondary"
            className={styles.mainMenuButton}
          >
            GAME RULES
          </MenuButton>
        </div>
      </div>
    </div>
  );
}
