import React from "react";
import toast from "react-hot-toast";

export interface DataType {
  name: string;
  url: string;
  id: number;
}

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}) => {
  // add shortcut
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      url: e.target[1].value,
      id: Date.now(),
    };

    const shortcuts: DataType[] =
      JSON.parse(localStorage.getItem("shortcuts")) || [];

    const isExist = shortcuts.find(
      (shortcut: DataType) =>
        shortcut.name === data.name || shortcut.url === data.url
    );

    if (isExist) {
      toast.error("this shortcurt is already added!");
      return null;
    } else {
      const updatedShortcuts = [...shortcuts, { ...data }];
      localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
    }
    setShowModal(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-[5px]   items-center justify-center ${
        showModal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl mb-4">Add Shortcut</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-gray-700 rounded-lg px-3 py-2 w-full text-white outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="url" className="block text-white">
              Url
            </label>
            <input
              type="url"
              id="url"
              required
              className="bg-gray-700 rounded-lg px-3 py-2 w-full text-white outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
