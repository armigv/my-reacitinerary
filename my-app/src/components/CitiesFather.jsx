import React, {useState} from "react";
import CitiesSon from "./CitiesSon";



const CitiesFather = () => {
  const [cities, setCities] = useState([
    {
      id: 6,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      titles:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
      
    },
    {
      id: 7,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      titles:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
      
    },
    {
      id: 8,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      titles:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
    },
  ]);

  return (
      
    <div className="wrapper">
      {cities.map((citiess) => {
        return (
          <CitiesSon
            key={citiess.id}
            name={citiess.titles}
            img={citiess.img}
            role={citiess.description}
          />
        );
      })}
    

    
    </div>
  );
};

export default CitiesFather;
