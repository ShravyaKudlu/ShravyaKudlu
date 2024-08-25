import React from "react";
import { styled } from "@mui/system";
import { ReactComponent as OpenIcon } from "./botClosed.svg";
import { ReactComponent as CloseIcon } from "./botOpened.svg";
import StyledChatbot from "./StyledChatbot";

// Styling the floating button
const FloatingButtonWrapper = styled("div")(({ theme, open }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "& .icon-svg": {
    transition: "transform 0.3s ease-in-out",
    width: "7rem", // Adjust size
    height: "4rem", // Adjust size
  },
}));

const FloatingChatActionButton = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null);

  const handleClickOutside = React.useCallback(
    (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        if (open) {
          setOpen(false);
        }
      }
    },
    [open]
  );

  React.useEffect(() => {
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
      <div className="icon-svg">
        {open ? (
          <CloseIcon style={{ width: "3.5rem", height: "3.5rem" }} />
        ) : (
          <OpenIcon style={{ width: "3.5rem", height: "3.5rem" }} />
        )}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ marginTop: "1rem" }}
        >
          <StyledChatbot />
        </div>
      )}
    </FloatingButtonWrapper>
  );
};

export default FloatingChatActionButton;
