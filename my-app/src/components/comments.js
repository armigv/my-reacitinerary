import React from "react";
import axios from "axios";
import { useStateValue } from "../StateProvider";

export default function comments() {
  const [comment, setComment] = useState();
  const [{ user }, dispatch] = useStateValue();
  const [reload, setReload] = useState();
  const [input, setInput] = useState();

  const submitComment = (event) => {
    event.prevenDefault();

    const dataComments = {
      itineraries: props.itinerary,
      message: event.target[0].value,
      user: user.datosUser.id,
    };

    await axios
      .post("http://localhost:4000/api/comments", { dataComments })
      .then((response) => setComment(response.data.response.comentario));
    setReload(!reload);
  };






  return <div>comments</div>;
}

// ? <p>{props.newComment.comment}</p>
// :<>
//     <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
//     <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
// </>
// }
