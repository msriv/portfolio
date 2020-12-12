import { useState } from "react";
import ModalView from "../common/ModalView";
import Markdown from "../common/Markdown";

const UpdateItem = ({ title, date, body, link }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const isClose = (modalState: any) => {
    setOpenModal(modalState);
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="mt-2">
        <hr className="border-dashed" />
        <h1 className="text-base font-medium mt-2">{title}</h1>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-400">{date}</span>
          <span className="text-sm">
            <a onClick={handleClick}>Read More</a>
          </span>
        </div>
      </div>
      {openModal ? (
        <ModalView
          type="Updates"
          title={title}
          date={date}
          isOpen={openModal}
          isClose={isClose}
        >
          <Markdown markdown={body} />
        </ModalView>
      ) : null}
    </div>
  );
};

export default UpdateItem;
