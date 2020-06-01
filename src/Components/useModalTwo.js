import React, { useState } from "react";

const useModalTwo = () => {
  const [isShowingTwo, setIsShowingTwo] = useState(false);

  function toggleTwo(event) {
    debugger;
    let tag = event.target;

    if (tag.tagName === "BUTTON" || tag.tagName === "SPAN") {
      setIsShowingTwo(!isShowingTwo);
    }
    if (
      tag.className === "modal-wrapper" ||
      tag.className === "modal-wrapper-move"
    ) {
      setIsShowingTwo(!isShowingTwo);
    }
  }

  return {
    isShowingTwo,
    toggleTwo,
  };
};

export default useModalTwo;
