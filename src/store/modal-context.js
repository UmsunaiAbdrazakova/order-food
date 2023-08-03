import React, { useReducer } from "react";

const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { isModalOpen: true };
    case CLOSE_MODAL:
      return { isModalOpen: false };
    default:
      return state;
  }
};

export const ModalContext = React.createContext({
  isModalOpen: false,
  onClose: () => {},
  onOpen: () => {},
});

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, { isModalOpen: false });

  const openModalHandler = () => dispatch({ type: OPEN_MODAL });
  const closeModalHandler = () => dispatch({ type: CLOSE_MODAL });

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: state.isModalOpen,
        onClose: closeModalHandler,
        onOpen: openModalHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
