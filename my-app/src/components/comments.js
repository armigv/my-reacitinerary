// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
// import swal from "sweetalert2";
// import { useStateValue } from "../StateProvider";
// import { TextField } from "@material-ui/core";
// import { Button } from "react-bootstrap";
// import SendIcon from "@mui/icons-material/Send";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: "36ch",
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: "inline",
//   },
// }));

// export default function Comment(props) {
//   const [comment, setComment] = useState();
//   const [{ user }, dispatch] = useStateValue();
//   const [reload, setReload] = useState(false);
//   const [input, setInput] = useState();

//   const submitComment = async (event) => {
//     event.prevenDefault();

//     const dataComments = {
//       itineraries: props.itinerario,
//       message: event.target[0].value,
//       user: user.datosUser.id,
//     };

//     await axios
//       .post("http://localhost:4000/api/comments", { dataComments })
//       .then((response) => setComment(response.data.response.comentario));
//     setReload(!reload);
//   };
//   useEffect(() => {
//     let id = props.itinerario;
//     axios.get(`http://localhost:4000/api/comments/${id} `).then((response) => {
//       setComment(response.data.response.comentario);
//     });
//     console.log(setComment);
//     //  console.log(response)
//   }, [reload]);

//   const borrarComentario = (id) => {
//     axios
//       .delete(`http://localhost:4000/api/comments/${id} `)
//       .then((response) => {
//         console.log(response);
//         swal({
//           title: response.data.mensaje,
//           icon: "success",
//           buttons: "ok",
//         });
//       });
//     setReload(!reload);
//   };

//   const handelChange = (event) => {
//     setInput(event.target.value);
//   };

//   const modificar = (id) => {
//     let data = input;
//     axios
//       .put(`http://localhost:4000/api/comments/${id} `, { data })
//       .then((response) => {
//         console.log(response);
//         swal({
//           title: response.data.mensaje,
//           icon: "success",
//           buttons: "ok",
//         });
//       });

//     setReload(!reload);
//   };
//   console.log(comment);
//   console.log(user);

//   const classes = useStyles();

//   return (
//     <div>
//       {comment?.map((item) => (
//         <div>
//           <div>
//             <div>
//               <List className={classes.root}>
//                 {user?.id === item.user._id ? (
//                   <ListItem alignItems="flex-start">
//                     <ListItemAvatar>
//                       <Avatar
//                         alt="Remy Sharp"
//                         src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
//                       />
//                     </ListItemAvatar>
//                     <ListItemText
//                       primary={item.user.firstname}
//                       secondary={
//                         <React.Fragment>
//                           <Typography
//                             component="span"
//                             variant="body2"
//                             className={classes.inline}
//                             color="textPrimary"
//                           >
//                            hola
//                           </Typography>
//                         </React.Fragment>
//                       }
//                     />
//                   </ListItem>
//                 ) : (
//                   <Divider variant="inset" component="li" />
//                 )}
//               </List>
//             </div>
//           </div>
//         </div>
//       ))}

//       {user ? (
//         <form onSubmit={submitComment}>
//           <TextField
//             label="add comment"
//             size="small"
//             variant="outlined"
//             className="post__input"
//             placeholder="add comment"
//             onChange={handelChange}
//           ></TextField>
//           <Button variant="contained" 
//           size="small" 
//           endIcon={<SendIcon />}
//           onClick={submitComment}
//           type="submit"
//           >
//             Send
//           </Button>
//         </form>
//       ) : (
//         <div>
//           <h1 className="signin">Inicies Sesion primero</h1>
//         </div>
//       )}
//     </div>
//   );
// }
// // ? <p>{props.newComment.comment}</p>
// // :<>
// //     <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
// //     <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
// // </>
// // }









import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider"
import axios from "axios";


export default function Coments(props) {

    const [comment, setComment] = useState()

    const [{ user }, dispatch] = useStateValue()

    const [reload, setReload] = useState(false)

    const [cambio, setCambio] = useState()


    const submitComent = async (event) => {
        event.preventDefault()


        const dataComents = {
            itinerarie: "",
            message: event.target[0].value,
            user: user.id
        }
        await axios.post("http://localhost:4000/api/coments", { dataComents })
            .then(response => console.log)
        setReload(!reload)
    }

    useEffect(() => {
        let id = ""
        axios.get(`http://localhost:4000/api/coments/${id}`)
            .then(response =>
                setComment(response.data.response.comentario))

    }, [reload])



    const borrarComentario = (id) => {
        axios.delete(`http://localhost:4000/api/coments/${id} `)
        setReload(!reload)
    }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        console.log(id)
        let data = cambio
        axios.put(`http://localhost:4000/api/coments/${id} `, { data })
        setReload(!reload)
    }

    console.log(comment)

    return (

        <div className="dibujo-comentario">



            {/* <div className="card__footer "> */}
                <div class="accordion accordion-flush" id="accordionExample">
                    {/* <div class="accordion-item"> */}
                        <h2 class="accordion-header" id="flush-headingOne">
                            {/* boton inicio */}
                            <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                COMENTARIO
                            </div>
                        </h2>

                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">

                            {user ?

                                <form onSubmit={submitComent} className="coments" >


                                    <textarea className="usuario4" placeholder="Deja su comentario aqui" id="floatingTextarea2" style={{ height: "100px", fontSize:"20px" }}></textarea>

                                    <div className="botones">
                                    <button className="btn-enviar" type="submit">ENVIAR</button>
                                </div>
                                </form>

                                :
                                <div>
                                     <h3 className="mx-5">Debes estar logueado </h3>
                                    
                                </div>
                            }
                            {comment?.map(item =>

                                <div class="accordion-body">
                                    {user?.id === item.user._id ?
                                        <div>
                                            <div class="user mt-2">
                                                <div className="icon-user">

                                                </div>
                                                <div className="usuario1">
                                                    <h5 className="usuario2">{item.user.firstname} {item.user.lastname} {item.user.name}</h5>
                                                    <div >
                                                        <input onKeyUp={handelChange} className="usuario3" defaultValue={item.comment}></input>
                                                    </div>
                                                    <small>2h ago</small>

                                                </div>

                                            </div>
                                            <div className="botones">
                                                <div>
                                                    <button className='btn-borrar' onClick={() => borrarComentario(item._id)}>BORRAR</button>
                                                </div>
                                                <div >
                                                    <button className='btn-editar' onClick={() => modificar(item._id)}>EDITAR</button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div class="user mt-2">
                                                <div className="icon-user">

                                                </div>
                                                <div className="user-info">
                                                    <h5>{item.user.firstname} {item.user.lastname} {item.user.name}</h5>
                                                    <div>
                                                        <p >{item.comment}</p>
                                                    </div>
                                                    <small>2h ago</small>

                                                </div>

                                            </div>

                                        </div>
                                    }
                                </div>
                            )}




                        </div>





                    {/* </div> */}






                </div>
            {/* </div> */}




        </div>
    )
}

