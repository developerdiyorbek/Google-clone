"use client";

import { useEffect, useState } from "react";
import Modal, { DataType } from "./Modal";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShortCut = () => {
  const [showModal, setShowModal] = useState(false);

  const [shortcurts, setShortcuts] = useState([]);

  useEffect(() => {
    const shortcurts: DataType[] = JSON.parse(
      localStorage.getItem("shortcuts")
    );
    setShortcuts(shortcurts);
  }, []);

  const handleDelete = (id: number) => {
    const updatedShortcuts = shortcurts.filter(
      (shortcurt) => shortcurt.id !== id
    );
    localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
    setShortcuts(updatedShortcuts);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-x-2 justify-center gap-y-3 mx-auto max-w-[600px] w-full ">
        {shortcurts?.map((shortcut: DataType) => (
          <div
            key={shortcut.id}
            className="text-center py-2 px-6 rounded group relative"
          >
            <span className="text-2xl rounded-full flex items-center justify-center w-12 h-12 text-white bg-gray-700 mb-2 mx-auto">
              {shortcut.name.charAt(0)}
            </span>
            <p className="mb-2 text-white text-lg">{shortcut.name}</p>
            <div className="flex items-center gap-3 justify-center">
              <button className="rounded bg-blue-500 text-white py-2 pl-3 hover:opacity-75 pr-2">
                <FaRegEdit size={20} />
              </button>
              <button
                className="rounded bg-red-500 text-white py-2 hover:opacity-75 px-2"
                onClick={() => handleDelete(shortcut.id)}
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        ))}
        <button
          className={`flex-col justify-center  items-center py-1 px-1  rounded-md hover:bg-[#37383b] group `}
          onClick={() => setShowModal(true)}
        >
          <span className="text-2xl rounded-full flex items-center justify-center w-12 h-12 text-white bg-gray-700 mx-auto ">
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
