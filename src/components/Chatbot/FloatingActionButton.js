import React, { useState, useEffect, useRef, useCallback } from "react";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import StyledChatbot from "./StyledChatbot";

const FloatingButtonWrapper = styled("div")(({ theme, open }) => ({
  position: "fixed",
  bottom: theme.spacing(15),
  right: theme.spacing(10),
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "& .fab-icon": {
    transition: "transform 0.3s ease-in-out",
    fontSize: "2rem",
  },
}));

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        if (open) {
          setOpen(false);
        }
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleButtonClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <FloatingButtonWrapper
      ref={buttonRef}
      open={open}
      onClick={handleButtonClick}
    >
      <div className="fab-icon">{open ? <CloseIcon /> : <AddIcon />}</div>
      {open && <StyledChatbot />}
    </FloatingButtonWrapper>
  );
};

export default FloatingActionButton;
