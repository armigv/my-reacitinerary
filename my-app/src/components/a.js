{/* <LinkRouter to={`/ciudad/${city._id}`}>
<button className="btn btn-primary">View more</button>
</LinkRouter> */}




<div className="container">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="box">
    <div className="card-itineraries" style={{ border: "width:18rem;" }}>
      <img
        src={
          process.env.PUBLIC_URL + `/imagenes/cities/${city.img}`
        }
        className="card-img-top"
        alt={city.name}
      />
      <div className="card-body">
        <div key={city._id} className="card-content-item">
          <h2 className="card-title">{city.name}</h2>
          <p className="card-text">{city.description}</p>
        </div>
        <LinkRouter to={`/ciudad/${city._id}`}>
          <button className="btn btn-primary">View more</button>
        </LinkRouter>
      </div>
    </div>
  </div>
</div>
</div>