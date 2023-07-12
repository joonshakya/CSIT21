import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CheckForUpdate = () => {
  const [open, setOpen] = useState(false);
  const [timeoutText, setTimeoutText] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const checkForUpdate = setInterval(async () => {
      if (typeof __NEXT_DATA__ !== "undefined") {
        const buildId = __NEXT_DATA__.buildId; // eslint-disable-line no-undef
        if (buildId === "development") return;
        const res = await fetch(
          `/_next/static/${buildId}/_ssgManifest.js?v=${Date.now()}`
        );
        if (res.status === 404) {
          setOpen(true);
        }
      }
    }, 15000);

    return () => {
      clearInterval(checkForUpdate);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const timeout = setInterval(() => {
        setTimeoutText((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          router.reload(window.location.pathname + `?refresh=${Date.now()}`);
          return 0;
        });
      }, 1000);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [open, router]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            m: "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
          }}
        >
          A new version of the website is available. Refreshing{" "}
          {timeoutText
            ? `in ${timeoutText} second${timeoutText > 1 ? "s" : ""}`
            : "now"}
          .
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckForUpdate;
