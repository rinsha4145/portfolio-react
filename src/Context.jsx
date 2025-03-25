import { createContext, useState } from "react";

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
    const [activeBar,setActiveBar]=useState("about")
  return (
    <MyContext.Provider value={{activeBar,setActiveBar }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
