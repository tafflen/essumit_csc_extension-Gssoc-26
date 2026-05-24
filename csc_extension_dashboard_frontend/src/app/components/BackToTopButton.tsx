import { useEffect, useState } from "react";
import type { RefObject } from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type BackToTopButtonProps = {
  containerRef?: RefObject<HTMLElement | null>;
  threshold?: number;
};

export default function BackToTopButton({
  containerRef,
  threshold = 240,
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollTarget = containerRef?.current;

    const getScrollTop = () => {
      if (scrollTarget) {
        return scrollTarget.scrollTop;
      }

      return window.scrollY || document.documentElement.scrollTop || 0;
    };

    const handleScroll = () => {
      setIsVisible(getScrollTop() > threshold);
    };

    handleScroll();

    const eventTarget: Window | HTMLElement = scrollTarget ?? window;
    eventTarget.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      eventTarget.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, threshold]);

  const handleClick = () => {
    const scrollTarget = containerRef?.current;

    if (scrollTarget) {
      scrollTarget.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={isVisible} unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          right: { xs: 16, sm: 20, md: 24 },
          bottom: { xs: 16, sm: 20, md: 24 },
          zIndex: 1500,
        }}
      >
        <Tooltip title="Back to top" placement="left">
          <Fab
            onClick={handleClick}
            color="primary"
            aria-label="Back to top"
            sx={{
              width: { xs: 44, md: 52 },
              height: { xs: 44, md: 52 },
              minHeight: 0,
              bgcolor: "#1a4592",
              color: "#ffffff",
              boxShadow: "0 18px 36px rgba(12, 36, 97, 0.28)",
              "&:hover": {
                bgcolor: "#0c2461",
              },
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: { xs: 22, md: 24 } }} />
          </Fab>
        </Tooltip>
      </Box>
    </Fade>
  );
}
