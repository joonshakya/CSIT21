import { forwardRef, useEffect, useState } from "react";

import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CheckForUpdate = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const checkForUpdate = setInterval(() => {
    if (typeof __NEXT_DATA__ !== "undefined") {
      const buildId = __NEXT_DATA__.buildId; // eslint-disable-line no-undef
      if (buildId === "development") return;
      fetch(`/_next/static/${buildId}/_ssgManifest.js?v=${Date.now()}`).then(
        (res) => {
          if (res.status !== 200) {
            handleClick();
            setTimeout(() => {
              window.location.reload();
            }, 10000);
          }
        }
      );
    }
  }, 60000);

  useEffect(() => {
    return () => {
      clearInterval(checkForUpdate);
    };
  }, [checkForUpdate]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          A new version of the website is available. Refreshing in 10 seconds.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckForUpdate;
