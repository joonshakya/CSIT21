import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBaseStore = create(
  persist(
    (set) => ({
      roll: "0",
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

export const useOpCodeStore = create((set) => ({
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
  "DL Section A": null,
  "DL Section B": null,
  FIT: null,
  C: null,
  Index: null,
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
  setWordFile: ({ subject, content }) => {
    set(() => ({
      [subject]: content,
    }));
  },
}));

export const useDevCppDownloadDialogStore = create((set) => ({
  open: false,
  setOpen: (open) => {
    set(() => ({
      open,
    }));
  },
}));

export const useNonPersistingStore = create((set) => ({
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
