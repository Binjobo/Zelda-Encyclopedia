const MonsterInfo = ({ info }) => {
  return (
    <div className="info">
      <div className="category">
        <div>
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
      </div>
    </div>
  );
};

export default MonsterInfo;
