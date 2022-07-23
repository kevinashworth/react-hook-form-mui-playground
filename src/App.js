import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormIndex from "./form/index"

const App = () => {
  return (
    <Container>
      <Typography variant="h1" color="primary">react-hook-form</Typography>
      <Typography variant="h2" color="secondary">Material-UI</Typography>
      <FormIndex />
    </Container>
  );
};

export default App;
