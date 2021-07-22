import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ERROR-Page Not Found</h1>
      <button
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        GO to Home
      </button>
    </div>
  );
};

export default Error;
