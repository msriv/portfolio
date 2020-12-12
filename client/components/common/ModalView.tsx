import { useEffect, useState } from "react";
import Modal from "react-modal";
import CloseBtn from "../../assets/icons/solid/x.svg";

Modal.setAppElement("#__next");

const ModalView = ({ type, title, date, isClose, isOpen, children }: any) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  const closeModal = () => {
    setIsOpen(false);
    isClose(false);
  };

  const customStyles = {
    content: {
      position: "absolute",
      left: "25%",
      right: "auto",
      bottom: "auto",
    },
  };

  useEffect(() => {
    console.log(`Trying to open... ${isOpen}`);
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-gray-800 shadow-lg rounded-lg w-6/12 border-none p-10 outline-none top-10"
      style={customStyles}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-base font-bold uppercase">{type}</span>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>

        <button
          className="bg-gray-900 p-4 outline-none hover:bg-gray-700 focus:outline-none rounded-full"
          onClick={closeModal}
        >
          <CloseBtn className="w-4 h-4" />
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default ModalView;
