import React from "react";
import CitiesSon from "./CitiesSon";



const CitiesFather = ({cities}) => {
  // const { cities } = props;

  return (
    <>
 

    <div className="wrapper">
      {cities.map((citiess) => {
        return (
          <CitiesSon
            name={citiess.country}
            img={citiess.img}
            role={citiess.description}

          
          />
          
          
        );
        
      })}
    
    
    </div>
    
    </>
  );
};

export default CitiesFather;
