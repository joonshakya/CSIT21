import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function EditOnGithubButton({
  link,
}: {
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        zIndex: 2,
        position: "absolute",
        top: 20,
        right: 24,
        display: "flex",
        alignItems: "center",

        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      <OpenInNewIcon
        sx={{
          fontSize: 20,
          mr: 0.8,
        }}
      />
      <Typography>Edit</Typography>
    </Link>
  );
}
