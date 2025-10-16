import { ReactNode } from "react";

export const slideNext = (setActiveIndex: React.Dispatch<React.SetStateAction<number>>, children: ReactNode[]) => {
  setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
};

export const AutoPlayStop = (timeID: NodeJS.Timeout | null, setSlideDone: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (timeID) {
    clearTimeout(timeID);
    setSlideDone(false);
  }
};

export const AutoPlayStart = (slideDone: boolean, setSlideDone: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (!slideDone) setSlideDone(true);
};
