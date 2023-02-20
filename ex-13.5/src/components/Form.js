import "../styles/form.css";
import React, { useEffect, useRef } from "react";

function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form>
      <label>
        Full Name: <input ref={inputRef} name="firstName" type="text" />
      </label>
    </form>
  );
}

export default Form;
