import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
          <div>
            <span className="font-semibold text-lg">Customer Name:</span>
            <span className="ml-2 text-gray-700">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div>
            <span className="font-semibold text-lg">Delivery Address:</span>
            <span className="ml-2 text-gray-700">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div>
            <span className="font-semibold text-lg">Time:</span>
            <span className="ml-2 text-gray-700">{getTime()}</span>
          </div>
          <div>
            <span className="font-semibold text-lg">Total Cost:</span>
            <span className="ml-2 text-gray-700">
              Tk {(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Cart Items */}
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem) => (
            <div key={cartItem.menuItemId} className="flex items-center gap-2">
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              <span className="text-gray-700">{cartItem.name}</span>
            </div>
          ))}
        </div>

        {/* Order Status */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="status" className="font-semibold text-lg">
            Order Status:
          </Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status" className="border rounded-md px-4 py-2">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent position="popper" className="rounded-lg">
              {ORDER_STATUS.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
