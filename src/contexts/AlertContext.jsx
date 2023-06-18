import { useState } from "react";
import context from "./context";

const AlertGlobal = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <context.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </context.Provider>
  );
};

export default AlertGlobal;
