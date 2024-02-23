import React from "react";
import Button from "./Button";

interface ModalProps {
  shown: boolean;
  closeModal: () => void;
  title: string;
  children: React.ReactElement;
  actionButtons?: [React.ReactElement];
}

function Modal(props: ModalProps): React.ReactElement {
  const { actionButtons = [], shown, closeModal, children, title } = props;
  if (!shown) {
    return <></>;
  }
  return (
    <div>
      <div onClick={closeModal} className="modal-bg" />
      <div className="modal">
        <div className="modal-top">
          <div className="modal-title">{title}</div>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-bottom">
          <Button onClick={closeModal}>Close</Button>
          {actionButtons}
        </div>
      </div>
    </div>
  );
}

export default Modal;
