import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { CheckCircle, MapPin, Package } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5 bg-white p-6 rounded-lg shadow-md">
      {/* Delivering To Section */}
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-700">Delivering to:</span>
        <span className="text-gray-600">{order.deliveryDetails.name}</span>
        <span className="text-gray-600">
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>

      {/* Your Order Section */}
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-700">Your Order</span>
        <ul className="space-y-2">
          {order.cartItems.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item.name}{" "}
              <span className="text-gray-500">x {item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Separator */}
      <Separator className="my-4" />

      {/* Total Section */}
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-700">Total</span>
        <span className="text-xl font-semibold text-gray-900">
          £{(order.totalAmount / 100).toFixed(2)}
        </span>
      </div>

      {/* Order Status Icons */}
      <div className="flex items-center gap-3 mt-6">
        <CheckCircle className="text-green-500" size={20} />
        <span className="text-gray-600">Confirmed</span>
        <MapPin className="text-yellow-500" size={20} />
        <span className="text-gray-600">In Transit</span>
        <Package className="text-blue-500" size={20} />
        <span className="text-gray-600">Delivered</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
