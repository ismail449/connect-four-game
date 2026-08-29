import {
  Content as DialogContent,
  Overlay as DialogOverlay,
  Portal as DialogPortal,
  Root as DialogRoot,
  Title as DialogTitle,
  Trigger as DialogTrigger,
} from "radix-ui/dialog";

import { NavigationButton } from "../navigation-button/navigation-button";

export default function PauseMenu() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <NavigationButton>Menu</NavigationButton>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Pause</DialogTitle>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}
