import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-4 lg:flex-row lg:items-center justify-between py-4 px-6 bg-gray-100 rounded-md shadow-sm">
      {/* Total Restaurants and City */}
      <span className="flex-1 text-gray-800">
        {total} Restaurants found in{" "}
        <span className="text-orange-500">{city}</span>
      </span>

      {/* Change Location Link */}
      <Link
        to="/"
        className="text-sm font-semibold underline text-blue-500 hover:text-blue-700 transition-colors"
      >
        Change Location
      </Link>
    </div>
  );
};

export default SearchResultInfo;
