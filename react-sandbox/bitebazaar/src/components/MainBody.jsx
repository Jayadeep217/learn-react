import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const MainBody = () => {
  return (
    <div className="main">
      <div className="search">
        <button className="btn-filter">Top rated restaurants</button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
