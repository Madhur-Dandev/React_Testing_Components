import React, { useContext } from "react";
import AlertGlobal from "../../contexts/AlertContext";
import context from "../../contexts/context";
import Alert from "./Alert";

const AnotherDiv = () => {
  const alert = useContext(context);
  return (
    <div>
      {alert.showAlert && <Alert />}
      <button
        onClick={() => {
          alert.setShowAlert(false);
          setTimeout(() => {
            alert.setShowAlert(true);
          }, 1);
        }}
        className="absolute top-10"
      >
        Alert
      </button>
    </div>
  );
};

const AlertCaller = () => {
  return (
    <AlertGlobal>
      <AnotherDiv />
    </AlertGlobal>
  );
};

export default AlertCaller;
