import React from "react";
import "../Button/styles.scss";

function BaseButton({ className = "", buttonText = "Botão", onClick }) {
  return (
    <button className={`button-list ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default BaseButton;
