import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  authuser: string;
  setAuthuser: (authuser: string) => void;
  roll: number;
  setRoll: (roll: number) => void;
  fullRoutine: boolean;
  setFullRoutine: (fullRoutine: boolean) => void;
  onlySection: boolean;
  setOnlySection: (onlySection: boolean) => void;
  wordFileLoaded: number;
}

export const useBaseStore = create<BearState>()(
  persist(
    (set) => ({
      authuser: "0",
      setAuthuser: (authuser) => {
        set(() => ({
          authuser,
        }));
      },
      roll: 0,
      setRoll: (roll) => {
        set(() => ({
          roll,
        }));
      },
      fullRoutine: false,
      setFullRoutine: (fullRoutine) => {
        set(() => ({
          fullRoutine,
        }));
      },
      onlySection: false,
      setOnlySection: (onlySection) => {
        set(() => ({
          onlySection,
        }));
      },
      wordFileLoaded: 0,
    }),
    {
      name: "base-store",
    }
  )
);

interface OpCodeStore {
  instruction: string;
  setInstruction: (instruction: string) => void;
  opCode: string;
  setOpCode: (opCode: string) => void;
  opCodeContainerWidth: number | null;
  setOpCodeContainerWidth: (
    opCodeContainerWidth: number | null
  ) => void;
}

export const useOpCodeStore = create<OpCodeStore>((set) => ({
  instruction: "MVI A, Data",
  setInstruction: (instruction) => {
    set(() => ({
      instruction,
    }));
  },
  opCode: "3E",
  setOpCode: (opCode) => {
    set(() => ({
      opCode,
    }));
  },
  opCodeContainerWidth: null,
  setOpCodeContainerWidth: (opCodeContainerWidth) => {
    set(() => ({
      opCodeContainerWidth,
    }));
  },
}));

export const useWordStore = create((set) => ({
  Java: null,
  Compiler: null,
  NCC: null,
  ECom: null,
  Simulation: null,
  ["Web Tech"]: null,
  "DL Section A": null,
  "DL Section B": null,
  FIT: null,
  C: null,
  Index: null,
  ["NCC Index"]: null,
  ["SE Index"]: null,
  ["ECom Index"]: null,
  ["Compiler Index"]: null,
  ["Web Tech Index"]: null,
  ["Simulation Index"]: null,
  ["DAA Index"]: null,
  ["MM Index"]: null,
  ["TOC Index"]: null,
  ["DBMS Index"]: null,
  ["CN Index"]: null,
  ["AI Index"]: null,
  ["CG Index"]: null,
  ["CA Index"]: null,
  ["DSA Index"]: null,
  ["NM Index"]: null,
  DS: null,
  OOP: null,
  DSA: null,
  CA: null,
  NM: null,
  CN: null,
  DBMS: null,
  TOC: null,
  setWordFile: ({ subject, content }) => {
    set(() => ({
      [subject]: content,
    }));
  },
}));

interface DevCppDownloadDialogStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDevCppDownloadDialogStore =
  create<DevCppDownloadDialogStore>((set) => ({
    open: false,
    setOpen: (open) => {
      set(() => ({
        open,
      }));
    },
  }));

interface FeedbackStore {
  feedbackName: string;
  setFeedbackName: (feedbackName: string) => void;
  feedbackMessage: string;
  setFeedbackMessage: (feedbackMessage: string) => void;
}
export const useNonPersistingStore = create<FeedbackStore>((set) => ({
  feedbackName: "",
  setFeedbackName: (feedbackName) => {
    set(() => ({
      feedbackName,
    }));
  },
  feedbackMessage: "",
  setFeedbackMessage: (feedbackMessage) => {
    set(() => ({
      feedbackMessage,
    }));
  },
}));
