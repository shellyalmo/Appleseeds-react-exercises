import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

const Input = ({ avatars, setData }) => {
  const [input, setInput] = useState("");
  const [filteredAvatars, setFilteredAvatars] = useState([]);

  useEffect(() => {
    if (input === "") {
      setFilteredAvatars(avatars);
    } else {
      const filteredSearch = avatars.filter((avatar) => {
        return Object.values(avatar)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      setFilteredAvatars(filteredSearch);
    }
  }, [avatars, input]);

  const filterInputHandler = (value) => {
    setInput(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        name="search"
        value={input}
        onChange={(e) => filterInputHandler(e.target.value)}
      />
      <button type="submit" onClick={() => setData(filteredAvatars)}>
        <BsSearch />
      </button>
    </div>
  );
};
export default Input;
