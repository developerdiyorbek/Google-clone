"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// icons
import { IoSearch } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { SiGooglelens } from "react-icons/si";

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://google.com/search?q=${inputValue}`;
    router.push(url);
  };

  return (
    <div className="text-center mt-16 mb-6">
      <h1 className="text-6xl md:text-8xl mb-8 text-white font-bold">Google</h1>
      <form
        className="bg-white rounded-md max-w-[500px] w-full mx-auto flex items-center justify-between py-3 px-6 gap-3 shadow-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url" className="cursor-pointer text-gray-500">
          <IoSearch size={20} />
        </label>
        <input
          type="text"
          className="bg-transparent focus:outline-none max-w-[400px] w-full text-gray-900 placeholder-gray-500"
          id="url"
          placeholder="Search Google or type a URL"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <div className="flex items-center gap-2">
          <button>
            <MdKeyboardVoice size={20} className="text-blue-500" />
          </button>
          <SiGooglelens size={20} className="text-blue-500" />
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
