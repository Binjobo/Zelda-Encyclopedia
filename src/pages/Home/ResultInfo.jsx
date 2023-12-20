const ResultInfo = ({ info }) => {
  return (
    <div className="info">
      {/* new code */}
      {/* <div className="favourites">
        <button className="favouritesButton">Add to Favourites</button>
      </div> */}
      <div className="name">
        <h2>Name</h2>
        <p>{info.name}</p>
      </div>

      <div className="category">
        <h2>Category</h2>
        <p>{info.category}</p>
      </div>

      <div className="locations">
        <h2>Locations</h2>
        <p>{info.common_locations}</p>
      </div>

      <div className="description">
        <h2>Description</h2>
        <p>{info.description}</p>
      </div>

      <div className="drops">
        <h2>Items Drops</h2>
        <p>{info.drops}</p>
      </div>

      <div className="picture">
        <h2>Image</h2>
        <img
          src={
            info.image !== "N/A"
              ? info.image
              : "https://via.placeholder.com/200"
          }
          alt={info.name}
        />
      </div>

      <hr />
    </div>
  );
};

export default ResultInfo;
