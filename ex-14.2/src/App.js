import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Input from "./components/Input";
import Avatar from "./components/Avatar";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      setData((prevData) => [...prevData, ...response.data.results]);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Input avatars={data} setData={setData} />

      <Avatar avatars={data} />
    </div>
  );
}

export default App;
