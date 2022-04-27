import axios from "axios";
import React, { useState } from "react";
import {FcLike, FcLikePlaceholder } from 'react-icons/fc';

import { useStateValue } from "../StateProvider"



function Likes(props) {

    const [{ user }, dispatch] = useStateValue()

    const [likes, setLikes] = useState(props.likes)

    console.log(props)
    console.log(user)


    const likeDislike = async () => {
        await axios.put(`http://localhost:4000/api/likesdislikes/${props.id}`, {}, {
            
        })
            .then(response =>
                setLikes(response.data.response))

    }

    let colorhearth = likes?.includes(user?.id)? <FcLike /> : <FcLikePlaceholder />
    
    return (
        <>
            {user?
                <div className="button-likes">
                    <button onClick={likeDislike}>
                        <span>{colorhearth}</span>
                    </button>
                    <span> {likes?.length}</span>
                </div>
                :
                <div className="button-likes">
                    <span>{colorhearth}</span>
                    <span> {likes?.length}</span>
                </div>

            }
        </>
    )
}
export default Likes;