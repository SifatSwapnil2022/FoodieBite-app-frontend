import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const [remainingTime, setRemainingTime] = useState("");

  const getExpectedDelivery = useCallback(() => {
    const created = new Date(order.createdAt);
    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );
    return created;
  }, [order.createdAt, order.restaurant.estimatedDeliveryTime]);

  const getOrderStatusInfo = useCallback(() => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  }, [order.status]);

  const updateRemainingTime = useCallback(() => {
    const expected = getExpectedDelivery();
    const now = new Date();
    const diffMs = expected.getTime() - now.getTime();

    if (diffMs <= 0) {
      setRemainingTime("Delivered");
    } else {
      const minutes = Math.floor(diffMs / 1000 / 60);
      const seconds = Math.floor((diffMs / 1000) % 60);
      setRemainingTime(
        `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
      );
    }
  }, [getExpectedDelivery]);

  useEffect(() => {
    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(interval);
  }, [updateRemainingTime]);

  const orderStatus = getOrderStatusInfo();

  return (
    <div className="p-5 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold tracking-tighter flex flex-col gap-3 md:flex-row md:justify-between">
        <span className="flex items-center gap-3 text-gray-800">
          {orderStatus.progressValue === 100 ? (
            <CheckCircle className="text-green-600" size={28} />
          ) : orderStatus.progressValue === 0 ? (
            <XCircle className="text-red-600" size={28} />
          ) : (
            <Clock className="text-blue-500" size={28} />
          )}
          <span>
            Order Status:{" "}
            <span
              className={`font-bold ${
                orderStatus.progressValue === 100
                  ? "text-green-600"
                  : orderStatus.progressValue === 0
                  ? "text-red-600"
                  : "text-blue-500"
              }`}
            >
              {orderStatus.label}
            </span>
          </span>
        </span>
        <span className="text-lg text-gray-600">
          <strong>Expected by:</strong>{" "}
          {getExpectedDelivery().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </h1>
      <div className="mt-3 flex justify-between items-center text-gray-700">
        <span>Estimated Time Left:</span>
        <span
          className={`font-bold text-lg ${
            remainingTime === "Delivered" ? "text-green-600" : "text-red-500"
          }`}
        >
          {remainingTime}
        </span>
      </div>
      <Progress
        className="mt-5 h-4 rounded-full bg-gray-200 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
        }}
        value={orderStatus.progressValue}
        aria-label="Order Progress"
      />
    </div>
  );
};

export default OrderStatusHeader;
