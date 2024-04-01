"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter keywords..."
        className="w-full h-12 mt-4 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border placeholder:ml-1 shadow-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="text-xl font-bold bg-amber-500 py-1 px-2 rounded-lg h-10 mt-5 cursor-pointer hover:scale-110 transition-all-ease duration-500 shadow-lg"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;