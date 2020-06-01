import React, { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(event) {
    let tag = event.target;

    if (tag.tagName === "BUTTON" || tag.tagName === "SPAN") {
      setIsShowing(!isShowing);
    }
    if (
      tag.className === "modal-wrapper" ||
      tag.className === "modal-wrapper-move"
    ) {
      setIsShowing(!isShowing);
    }
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
