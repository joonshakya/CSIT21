import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ContributeDialog({ title, open, setOpen }) {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        zIndex: 1500,
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title || "Item not found"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please contribute the materials in GitHub so that we can
          help each other.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          href="https://github.com/CSIT21"
          onClick={() => {
            setOpen(false);
          }}
          target="_blank"
          rel="noopener noreferrer"
          autoFocus
        >
          Contribute
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
