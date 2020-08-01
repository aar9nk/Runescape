import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PayPalButton from "./PayPalButton";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    maxWidth: "100vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
}));

const SimpleModal = props => {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [values, setValues] = React.useState({
    name: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();

  return (
    <div>
      <form className="form" noValidate autoComplete="off">
        <TextField
          required
          id="standard-with-placeholder"
          label="Player Name"
          placeholder="Required"
          onChange={handleChange("name")}
        />
      </form>
      <Button
        className="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        Confirm
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 style={{ color: "#007bff" }}>
            World 330 - Lumbridge Castle Top Bank
          </h2>
          <p>After confirmation of payment, a player will trade you in-game.</p>
          <PayPalButton total={props.currency} />
        </div>
      </Modal>
    </div>
  );
};

export default SimpleModal;
