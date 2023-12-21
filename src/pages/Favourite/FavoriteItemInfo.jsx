const FavoriteItemInfo = ({ info, onDelete }) => {
  return (
    <div className="info">
      <div className="name">
        <h2>Name</h2>
        <p>{info.Name}</p>
      </div>

      <div className="category">
        <h2>Category</h2>
        <p>{info.Category}</p>
      </div>

      <div className="locations">
        <h2>Locations</h2>
        <p>{info.Locations}</p>
      </div>

      <div className="description">
        <h2>Description</h2>
        <p>{info.Description}</p>
      </div>

      <div className="drops">
        <h2>Items Drops</h2>
        <p>{info["Item Drops"]}</p>
      </div>

      <div className="picture">
        <h2>Image</h2>
        <img
          src={
            info.Image !== "N/A"
              ? info.Image
              : "https://via.placeholder.com/200"
          }
          alt={info.Name}
        />
      </div>

      <div className="favourites">
        <button className="deleteButton" onClick={onDelete}>
          Remove from Favourites
        </button>
      </div>

      <hr />
    </div>
  );
};

export default FavoriteItemInfo;
