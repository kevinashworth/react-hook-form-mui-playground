import React from "react";
import { useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./text_input";

const maxLength = 32;

const useStyles = makeStyles(() => ({
  button: {
    margin: 8,
  },
  buttons: {
    paddingBottom: 32,
    paddingTop: 64,
    float: "right",
  },
  centered: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  leftPanel: {
    width: 560 + 24 * 2,
  },
  canva: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "75.0000%",
    paddingBottom: 48,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: 8,
    willChange: "transform",
  },
}));

const Create = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useFormContext();
  const classes = useStyles();
  const handleCancel = () => {
    console.log("cancel");
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      style={{
        border: "1px solid #e0e0e0",
        width: 560 + 288 + 24 * 6,
        minHeight: "80vh",
      }}
    >
      <Box id="header-row" p={3}>
        <Typography variant="h6">Create</Typography>
      </Box>
      <Box id="panels" display="flex" flexDirection="row" px={1}>
        <Box id="left-panel" className={classes.leftPanel} px={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextInput
                  name="street"
                  label="Street"
                  rules={{
                    required: true,
                    maxLength: {
                      value: maxLength,
                      message: `City must be ${maxLength} characters or less.`,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextInput
                  name="city"
                  label="City"
                  placeholder="Where you at?"
                  rules={{
                    required: true,
                    maxLength: {
                      value: maxLength,
                      message: `City must be ${maxLength} characters or less.`,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextInput
                  helperText="Standard 2-letter abbrev"
                  name="state"
                  label="State"
                  rules={{
                    maxLength: {
                      value: 2,
                      message: "State must be 2 characters.",
                    },
                    minLength: {
                      value: 2,
                      message: "State must be 2 characters.",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  helperText="Numbers only"
                  name="zip"
                  label="Postal Code"
                  rules={{
                    required: true,
                    validate: (value) => {
                      if (!/^\d+$/.test(value)) {
                        return "Must be numerals only.";
                      }
                    },
                  }}
                  variant="compact"
                />
              </Grid>
            </Grid>
            <Box className={classes.buttons}>
              <Button
                className={classes.button}
                color="secondary"
                onClick={handleCancel}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                className={classes.button}
                color="secondary"
                disabled={!isValid}
                type="submit"
                variant="contained"
              >
                Create
              </Button>
            </Box>
          </form>
        </Box>
        <Box id="right-panel" px={3} style={{ width: 288 }}>
          <img
            src="https://fakeimg.pl/288x440/424242,128/ffffff/?text=placeholder&font_size=24"
            width="288"
            height="440"
            alt="Hello, World"
          />
        </Box>
      </Box>
      <DevTool control={control} />
    </Container>
  );
};

export default Create;
