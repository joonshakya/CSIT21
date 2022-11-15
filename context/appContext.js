import { createContext, useEffect, useReducer } from "react";

const initialState = {
  roll: "0",
  loading: 0,
  loadingProgress: null,
  constants: null,
  errorPopupMessage: null,
};

const AppContext = createContext({
  roll: "0",
  loading: 0,
  loadingProgress: null,
  errorPopupMessage: null,
  setLoading: (loading) => {},
  setLoadingProgress: (loadingProgress) => {},
  setErrorPopupMessage: (message) => {},
  setRoll: (roll) => {},
});

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
          ? state.loading + 1
          : state.loading < 1
          ? 0
          : state.loading - 1,
      };
    case "SET_LOADING_PROGRESS":
      return {
        ...state,
        loadingProgress: action.payload,
      };
    case "SET_ERROR_POPUP_MESSAGE":
      return {
        ...state,
        errorPopupMessage: action.payload,
      };
    case "SET_ROLL":
      return {
        ...state,
        roll: action.payload,
      };
    default:
      return state;
  }
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLoading = (loading) => {
    dispatch({
      type: "SET_LOADING",
      payload: loading,
    });
  };

  const setLoadingProgress = (loadingProgress) => {
    dispatch({
      type: "SET_LOADING_PROGRESS",
      payload: loadingProgress,
    });
  };

  const setErrorPopupMessage = (errorPopupMessage) => {
    dispatch({
      type: "SET_ERROR_POPUP_MESSAGE",
      payload: errorPopupMessage,
    });
  };

  const setRoll = (roll) => {
    localStorage.setItem("roll", roll);
    dispatch({
      type: "SET_ROLL",
      payload: roll,
    });
  };

  useEffect(() => {
    const roll = localStorage.getItem("roll");
    if (roll) {
      setRoll(roll);
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          roll: state.roll,
          loading: state.loading,
          loadingProgress: state.loadingProgress,
          errorPopupMessage: state.errorPopupMessage,
          setLoading,
          setLoadingProgress,
          setErrorPopupMessage,
          setRoll,
        }}
      >
        {props.children}
        {/* <Loading /> */}
        {/* <ErrorPopup /> */}
      </AppContext.Provider>
    </>
  );
};

export { AppProvider, AppContext };
