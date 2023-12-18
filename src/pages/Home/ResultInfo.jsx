const ResultInfo = ({ info }) => {
  return (
    <div className="info">
      <div className="category">
        <div>
          <h4>Category</h4>
          <p>{info.category}</p>
        </div>

        <div className="locations">
          <h4>Locations</h4>
          <p>{info.common_locations}</p>
        </div>

        <div className="description">
          <h4>Description</h4>
          <p>{info.description}</p>
        </div>

        <div className="drops">
          <h4>Items Drops</h4>
          <p>{info.drops}</p>
        </div>

        <div className="picture">
          <h4>Image</h4>
          <img
            src={
              info.image !== "N/A"
                ? info.image
                : "https://via.placeholder.com/200"
            }
            alt={info.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultInfo;
