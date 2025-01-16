import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash, ShoppingCart } from "lucide-react";
// Add a reusable button component if available.

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const formatPrice = (priceInPence: number) =>
    `£${(priceInPence / 100).toFixed(2)}`;

  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;
    return formatPrice(totalWithDelivery);
  };

  const handleRemoveItem = (item: CartItem) => {
    if (
      window.confirm(
        `Are you sure you want to remove "${item.name}" from your cart?`
      )
    ) {
      removeFromCart(item);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between items-center">
          <span>Your Order</span>
          <span className="text-green-600">{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-800"
                  >
                    {item.quantity}
                  </Badge>
                  <span className="text-gray-800">{item.name}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Trash
                    className="cursor-pointer hover:text-red-600"
                    size={20}
                    onClick={() => handleRemoveItem(item)}
                    aria-label={`Remove ${item.name}`}
                  />
                  <span className="text-gray-700">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="text-gray-800 font-medium">
                {formatPrice(restaurant.deliveryPrice)}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>
              <span className="text-green-600 text-xl font-bold">
                {getTotalCost()}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <ShoppingCart size={40} />
            <p className="mt-3 text-lg font-medium">Your cart is empty.</p>
            <p className="text-sm">Start adding items to your cart!</p>
          </div>
        )}
      </CardContent>
    </>
  );
};

export default OrderSummary;
