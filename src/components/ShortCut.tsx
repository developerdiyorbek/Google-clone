"use client";

import { useState } from "react";
import Modal from "./Modal";

const ShortCut = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button
          className="flex flex-col items-center p-2 rounded-md hover:bg-gray-300 group"
          onClick={() => setShowModal(true)}
        >
          <span className="text-2xl rounded-full flex items-center justify-center w-12 h-12 text-white bg-gray-700">
            +
          </span>
          <p className="mt-2 group-hover:text-white">Add shortcut</p>
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ShortCut;
