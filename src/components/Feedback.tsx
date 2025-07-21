import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useBaseStore, useNonPersistingStore } from "../store";

export default function Feedback({ sem }: { sem: string }) {
  const name = useNonPersistingStore((state) => state.feedbackName);
  const setName = useNonPersistingStore(
    (state) => state.setFeedbackName
  );

  const feedback = useNonPersistingStore(
    (state) => state.feedbackMessage
  );
  const setFeedback = useNonPersistingStore(
    (state) => state.setFeedbackMessage
  );

  return (
    <Card
      sx={{
        mt: 2,
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      }}
      elevation={3}
    >
      <CardContent
        sx={{
          flex: 1,
          pb: "0 !important",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Want something to be added here?
        </Typography>

        <form
          action="https://formspree.io/xaywlaob"
          method="POST"
          id="feedback-form"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target);
            sendMail({
              name: encodeURIComponent(name),
              message: encodeURIComponent(feedback),
              sem: sem ? encodeURIComponent(sem) : "",
            });
            setName("");
            setFeedback("");
          }}
        >
          <div>
            <TextField
              label="Your Name"
              name="name"
              required
              multiline
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{
                mt: 1,
                width: "100%",
              }}
            />
          </div>
          <div>
            <TextField
              label="Your Feedback"
              required
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
              multiline
              sx={{
                mt: 2,
                width: "100%",
              }}
            />
          </div>
          <CardActions
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Button size="small" type="submit">
              Proceed to Send
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}

function sendMail({ name = "", message = "", sem = "" }) {
  const authuser = useBaseStore.getState().authuser;
  try {
    document.createEvent("TouchEvent");
    window.location.href = `mailto:Joon Shakya<joonshakya07@gmail.com>?subject=Feedback by ${name} ${
      sem ? `from ${sem}` : ""
    }&body=${message}`;
  } catch (e) {
    const h = 500;
    const w = 688;
    const leftPosition = screen.width ? (screen.width - w) / 2 : 0;
    const topPosition = screen.height ? (screen.height - h) / 2 : 0;
    window.open(
      `https://mail.google.com?view=cm&to=Joon Shakya<joonshakya07@gmail.com>&su=Feedback by ${name} ${
        sem ? `from ${sem}` : ""
      }&&body=${message}`,
      "popUpWindow",
      `height=${h},width=${w},left=${leftPosition},top=${topPosition},resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes&authuser=${authuser}`
    );
  }
  return true;
}
