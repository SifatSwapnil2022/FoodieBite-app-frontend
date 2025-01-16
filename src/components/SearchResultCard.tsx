import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group p-4 rounded-lg border hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Section */}
      <AspectRatio ratio={16 / 6}>
        <img
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>

      {/* Content Section */}
      <div>
        {/* Restaurant Name */}
        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-orange-500 transition-colors">
          {restaurant.restaurantName}
        </h3>

        {/* Cuisine Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {restaurant.cuisines.map((item) => (
            <span
              key={item}
              className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="text-green-600" />
            <span>{restaurant.estimatedDeliveryTime} mins delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Banknote className="text-blue-600" />
            <span>
              Delivery from £{(restaurant.deliveryPrice / 100).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
