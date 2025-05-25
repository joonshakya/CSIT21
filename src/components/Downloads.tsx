import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDevCppDownloadDialogStore } from "../store";
import { GradientButton } from "./Materials";
import { downloads } from "../utils/constants/downloads";
import EditOnGithubButton from "./EditOnGithubButton";

export default function Downlaods() {
  const { open, setOpen } = useDevCppDownloadDialogStore();

  return (
    <>
      <Card
        sx={{
          mt: 2,
          display: "flex",
          borderRadius: ".6rem",
          "&:hover": {
            boxShadow:
              "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          },
        }}
        elevation={3}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              position: "relative",
              pb: 0,
              pt: 2,
            }}
          >
            <EditOnGithubButton link="https://www.github.com/" />
            <Typography variant="h5" component="div">
              Downloads
            </Typography>
            <Box
              sx={{
                my: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {downloads.map(
                (
                  { name, link, onClick, bgColor, bgImage },
                  index
                ) => (
                  <GradientButton
                    key={index}
                    name={name}
                    link={link}
                    onClick={onClick}
                    bgColor={bgColor}
                    bgImage={bgImage}
                  />
                )
              )}
            </Box>
          </CardContent>
        </Box>
      </Card>
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
        <DialogTitle>Are you in college?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Clicking &quot;YES&quot; will download the student version
            of Dev C++ with graphics.h and OpenGL that doesn&apos;t
            require admin password. If you are not in college and you
            know the password of your PC, you can click &quot;NO&quot;
            to download the admin version of Dev C++ with graphics.h
            and OpenGL.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            href="https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/OpenGL/NoAdmin.DevC++WithGraphics.NoFileAssociation.exe"
            onClick={() => {
              setOpen(false);
            }}
            target="_blank"
            rel="noopener noreferrer"
            autoFocus
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            href="https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/OpenGL/Admin.DevC++WithGraphics.FileAssociation.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            No
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
    </>
  );
}
