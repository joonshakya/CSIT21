import { WordProvider } from "./wordContext";
import { AppProvider } from "./appContext";
import { OpCodeProvider } from "./opCodeContext";

export default function ContextProvider({ children }) {
  return (
    <>
      <AppProvider>
        <OpCodeProvider>
          <WordProvider>{children}</WordProvider>
        </OpCodeProvider>
      </AppProvider>
    </>
  );
}
