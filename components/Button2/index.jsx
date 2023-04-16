import React from "react";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  return (
    <a href="javascript:SubmitForm('form1')">
      <div className="button animate-enter">
        <h1 className="text-2">{children}</h1>
      </div>
    </a>
  );
}

export default Button2;
