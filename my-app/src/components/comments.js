import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import swal from "sweetalert2"
import { useStateValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Comment(props) {
  const [comment, setComment] = useState();
  const [{ user }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);
  const [input, setInput] = useState();

  const submitComment = async (event) => {
    event.prevenDefault();

    const dataComments = {
      itineraries: props.itinerario,
      message: event.target[0].value,
      user: user.datosUser.id,
    };

   await axios
      .post("http://localhost:4000/api/comments", { dataComments })
      .then((response) => setComment(response.data.response.comentario));
    setReload(!reload);
  }
    useEffect(() => {
      let id = props.itinerario;
      axios
        .get(`http://localhost:4000/api/comments/${id} `)
        .then((response) => {
          setComment(response.data.response.comentario);
        });

      //  console.log(response)
    }, [reload]);

    const borrarComentario = (id) => {
      axios
        .delete(`http://localhost:4000/api/comments/${id} `)
        .then((response) => {
          console.log(response);
          swal({
            title: response.data.mensaje,
            icon: "success",
            buttons: "ok",
          });
        });
      setReload(!reload);
    };

    const handelChange = (event) => {
      setInput(event.target.value);
    };

    const modificar = (id) => {
      let data = input;
      axios
        .put(`http://localhost:4000/api/comments/${id} `, { data })
        .then((response) => {
          console.log(response);
          swal({
            title: response.data.mensaje,
            icon: "success",
            buttons: "ok",
          });
        });

      setReload(!reload);
    };
    console.log(comment);
    console.log(user);
  
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          />
        </ListItemAvatar>
        <ListItemText
          primary="username"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                this is comment
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
// ? <p>{props.newComment.comment}</p>
// :<>
//     <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
//     <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
// </>
// }
