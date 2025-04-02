// Context.jsx
import { createContext, useEffect, useState } from "react";

// Create context
export const MyContext = createContext(null);

// Provider component
const MyProvider = ({ children }) => {
  const initialBar = sessionStorage.getItem("activeBar") || "about";
  const [activeBar, setActiveBar] = useState(initialBar);
  useEffect(() => {
    sessionStorage.setItem("activeBar", activeBar);
  }, [activeBar]);

  return (
    <MyContext.Provider value={{ activeBar, setActiveBar }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
