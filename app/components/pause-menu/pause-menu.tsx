import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "radix-ui/dialog";

import MenuButton from "../menu-button/menu-button";
import { NavigationButton } from "../navigation-button/navigation-button";
import styles from "./pause-menu.module.css";

export default function PauseMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <NavigationButton>Menu</NavigationButton>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={styles.pauseMenuOverlay} />
        <DialogContent className={styles.pauseMenu}>
          <DialogTitle className={styles.title}>Pause</DialogTitle>
          <div className={styles.buttonsWrapper}>
            <DialogClose asChild>
              <MenuButton variant="secondary">Continue</MenuButton>
            </DialogClose>
            <MenuButton variant="secondary">RESTART</MenuButton>
            <MenuButton variant="danger" to="/">
              QUIT GAME
            </MenuButton>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
