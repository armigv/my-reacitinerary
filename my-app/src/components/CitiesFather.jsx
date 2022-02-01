import React, {useState} from "react";
import CitiesSon from "./CitiesSon";



const CitiesFather = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
      
    },
    {
      id: 2,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
      
    },
    {
      id: 3,
      img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title:"Baked Cod with Vegetables",
      description:"Baked Cod with Vegetables. 30 minute meal!",
    },
  ]);

  return (
      
    <div className="wrapper">
      {persons.map((person) => {
        return (
          <CitiesSon
            key={person.id}
            name={person.title}
            img={person.img}
            role={person.description}
          />
        );
      })}
    

    
    </div>
  );
};

export default CitiesFather;
