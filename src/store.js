import create from "zustand";
import { persist } from "zustand/middleware";

export const useBaseStore = create(
  persist(
    (set) => ({
      roll: "0",
      setRoll: (roll) => {
        set((state) => ({
          roll,
        }));
      },
      fullRoutine: false,
      setFullRoutine: (fullRoutine) => {
        set((state) => ({
          fullRoutine,
        }));
      },
      onlySection: false,
      setOnlySection: (onlySection) => {
        set((state) => ({
          onlySection,
        }));
      },
      wordFileLoaded: 0,
    }),
    {
      name: "base-store",
      getStorage: () => localStorage,
    }
  )
);

export const useOpCodeStore = create((set) => ({
  instruction: "MVI A, Data",
  setInstruction: (instruction) => {
    set((state) => ({
      instruction,
    }));
  },
  opCode: "3E",
  setOpCode: (opCode) => {
    set((state) => ({
      opCode,
    }));
  },
  opCodeContainerWidth: null,
  setOpCodeContainerWidth: (opCodeContainerWidth) => {
    set((state) => ({
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
  DS: null,
  OOP: null,
  setWordFile: ({ subject, content }) => {
    set((state) => ({
      [subject]: content,
    }));
  },
}));
