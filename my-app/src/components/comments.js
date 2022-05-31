
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
            itinerario: props.itinerary,
            message: event.target[0].value,
            user: user.response.id,
        }
        console.log(props)
        await axios.post("https://my-reacitinerary.herokuapp.com/api/coments", { dataComents })
            .then(response => console.log)
        setReload(!reload)
    }

    useEffect(() => {
        let id = props.itinerary
        axios.get(`https://my-reacitinerary.herokuapp.com/api/coments/${id}`)
            .then(response =>
                setComment(response.data.response.comentario))

    }, [reload])



    const borrarComentario = (id) => {
        axios.delete(`https://my-reacitinerary.herokuapp.com/api/coments/${id} `)
        setReload(!reload)
    }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        console.log(id)
        let data = cambio
        axios.put(`https://my-reacitinerary.herokuapp.com/api/coments/${id} `, { data })
        setReload(!reload)
    }

    console.log(comment)
    console.log(user)

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

                          
                            {comment?.map(item =>

                                <div class="accordion-body">
                                    {user?.response.id === item.user._id ? 
                                        <div>
                                            <div class="user mt-2">
                                                <div className="icon-user">

                                                </div>
                                                <div className="usuario1">
                                                    <h5 className="usuario2">{item.user.firstname} {item.user.lastname} </h5>
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
                                                    <h5>{item.user.firstname} {item.user.lastname} </h5>
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



                        </div>





                    {/* </div> */}






                </div>
            {/* </div> */}




        </div>
    )
}

