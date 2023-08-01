import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDevCppDownloadDialogStore } from "../src/store";

export function DevCppAdminNoAdminDialog() {
  const { open, setOpen } = useDevCppDownloadDialogStore();
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Are you in college?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Clicking &quot;YES&quot; will download the student version of Dev C++
          with graphics.h that doesn&apos;t require admin password. If you are
          not in college and you know the password of your PC, you can click
          &quot;NO&quot; download the Admin version of Dev C++ with graphics.h.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          href="https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/main-release/NoAdmin.DevC++WithGraphics.NoFileAssociation.exe"
          onClick={() => {
            setOpen(false);
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
          }}
          href="https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/main-release/Admin.DevC++WithGraphics.FileAssociation.exe"
          target="_blank"
          rel="noopener noreferrer"
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
