import React from "react";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const fetchList = async () => {
    const response = await fetch(`https://icanhazdadjoke.com/`);
    let data = await response.json();

    // setLoading(false);
    console.log(data);
  };

  const [list, setList] = useState("fuck");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchList();
  }, []);

  return <Context.Provider value={{ list }}>{children}</Context.Provider>;
};
export default Context;
