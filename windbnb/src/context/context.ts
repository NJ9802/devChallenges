import {
  Dispatch,
  SetStateAction,
  createContext,
} from "react";

export const DrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

