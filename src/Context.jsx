// Context.jsx
import { createContext, useState } from "react";

// Create context
export const MyContext = createContext(null);

// Provider component
const MyProvider = ({ children }) => {
  const [activeBar, setActiveBar] = useState("about");

  return (
    <MyContext.Provider value={{ activeBar, setActiveBar }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
