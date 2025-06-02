import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNonPersistingStore } from "../../src/store.ts";

const Alert = forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});

const CheckForUpdate = () => {
  const [open, setOpen] = useState(false);
  const [timeoutText, setTimeoutText] = useState(10);

  const router = useRouter();

  const name = useNonPersistingStore((state) => state.feedbackName);
  const feedback = useNonPersistingStore(
    (state) => state.feedbackMessage
  );

  const preventRefresh = name || feedback;

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
    setTimeoutText(10);
    if (open && !preventRefresh) {
      const timeout = setInterval(() => {
        setTimeoutText((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          router.reload(
            window.location.pathname + `?refresh=${Date.now()}`
          );
          clearInterval(timeout);

          return 0;
        });
      }, 1000);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [open, router, preventRefresh]);

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <>
      <Snackbar open={open}>
        <Alert
          severity="success"
          sx={{
            width: "100%",
            m: "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
          }}
        >
          A new update of the website is available.{" "}
          {preventRefresh
            ? `Please refresh the page to get the latest version.`
            : `Refreshing ${
                timeoutText
                  ? `in ${timeoutText} second${
                      timeoutText > 1 ? "s" : ""
                    }`
                  : "now"
              }.`}
          .
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckForUpdate;
