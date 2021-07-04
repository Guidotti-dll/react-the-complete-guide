import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTime = {
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTime}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className={"Modal"}>
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
