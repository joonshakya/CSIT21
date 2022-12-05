import { createContext, useReducer } from "react";

const initialState = {
  "DL Section A": null,
  "DL Section B": null,
  FIT: null,
  C: null,
  Index: null,
  DS: null,
  OOP: null,
};

const WordContext = createContext({
  "DL Section A": null,
  "DL Section B": null,
  FIT: null,
  C: null,
  Index: null,
  DS: null,
  OOP: null,
  setWordFile: () => {},
});

const wordReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORD_FILE":
      return {
        ...state,
        [action.payload.subject]: action.payload.content,
      };
    default:
      return state;
  }
};

const WordProvider = (props) => {
  const [state, dispatch] = useReducer(wordReducer, initialState);

  const setWordFile = ({ subject, content }) => {
    dispatch({
      type: "SET_WORD_FILE",
      payload: { subject, content },
    });
  };

  return (
    <WordContext.Provider
      value={{
        "DL Section A": state["DL Section A"],
        "DL Section B": state["DL Section B"],
        FIT: state.FIT,
        C: state.C,
        Index: state.Index,
        DS: state.DS,
        OOP: state.OOP,
        setWordFile,
      }}
    >
      {props.children}
      {/* <Loading /> */}
      {/* <ErrorPopup /> */}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };
