import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #256eb8",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-multiline-static"
            className={classes.root}
            label="メモ"
            multiline
            rows={6}
            variant="outlined"
          />
        </div>
      </form>
    </Container>
  );
}
