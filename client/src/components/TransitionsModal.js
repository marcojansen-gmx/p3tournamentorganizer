import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!props.open) {
      return;
    }

    fetch("/api/attendees/" + props.eventId)
      .then((resp) => {
        return resp.json();
      })
      .then((users) => {
        setUsers(users);
      });
  }, [props.open]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2>Going</h2>
            <p>
              {users.map((user) => {
                return (
                  <div>
                    {user.firstname} {user.lastname}
                  </div>
                );
              })}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
