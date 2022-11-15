import { WordProvider } from "./wordContext";
import { AppProvider } from "./appContext";

export default function ContextProvider({ children }) {
  return (
    <>
      <AppProvider>
        <WordProvider>{children}</WordProvider>
      </AppProvider>
    </>
  );
}
