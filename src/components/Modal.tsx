import React from "react";
import "../styles/Modal.scss";

interface ModalProp {
  show: boolean;
  children: React.ReactNode;
}

export default function Modal({ show, children }: ModalProp) {
  return show ? <ModalWrapper>{children}</ModalWrapper> : null;
}

interface ModalWrapperProp {
  children: ModalProp["children"];
}

const ModalWrapper = ({ children }: ModalWrapperProp) => {
  return (
    <div className="modalWrapper modalVisible">
      <div className="modal modalContentVisible">{children}</div>
    </div>
  );
};
