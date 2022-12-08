import { createContext, useReducer } from "react";

const initialState = {
  instruction: "MVI A, Data",
  opCode: "3E",
  opCodeContainerWidth: null,
};

const OpCodeContext = createContext({
  instruction: null,
  opCode: null,
  opCodeContainerWidth: null,
  setInstruction: () => {},
  setOpCode: () => {},
  setOpCodeContainerWidth: () => {},
});

const opCodeReducer = (state, action) => {
  switch (action.type) {
    case "SET_INSTRUCTION":
      return {
        ...state,
        instruction: action.payload,
      };
    case "SET_OPCODE":
      return {
        ...state,
        opCode: action.payload,
      };
    case "SET_OPCODE_CONTAINER_WIDTH":
      return {
        ...state,
        opCodeContainerWidth: action.payload,
      };
    default:
      return state;
  }
};

const OpCodeProvider = (props) => {
  const [state, dispatch] = useReducer(opCodeReducer, initialState);

  const setInstruction = (instruction) => {
    dispatch({
      type: "SET_INSTRUCTION",
      payload: instruction,
    });
  };

  const setOpCode = (opCode) => {
    dispatch({
      type: "SET_OPCODE",
      payload: opCode,
    });
  };

  const setOpCodeContainerWidth = (opCodeContainerWidth) => {
    dispatch({
      type: "SET_OPCODE_CONTAINER_WIDTH",
      payload: opCodeContainerWidth,
    });
  };

  return (
    <OpCodeContext.Provider
      value={{
        instruction: state.instruction,
        opCode: state.opCode,
        opCodeContainerWidth: state.opCodeContainerWidth,
        setInstruction,
        setOpCode,
        setOpCodeContainerWidth,
      }}
    >
      {props.children}
    </OpCodeContext.Provider>
  );
};

export { OpCodeProvider, OpCodeContext };
