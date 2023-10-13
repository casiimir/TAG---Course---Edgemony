import { useState } from "react";
import OrdersStatus from "../ordersStatus";
import { OrderList } from "@/types/index";
import styles from "./index.module.scss";

let mockList = [
  {
    id: 1,
    value: 16,
    status: "",
    img: "https://robohash.org/alice",
    name: "New Orders",
  },
  {
    id: 2,
    value: 86,
    status: "+2,5%",
    img: "https://robohash.org/matteo_c",
    name: "Total Orders",
  },
  {
    id: 3,
    value: 9,
    status: "+3,2%",
    img: "https://robohash.org/matteo_p",
    name: "Waiting List",
  },
];

const ContentSection = () => {
  const [ordersList, setOrdersList] = useState<OrderList[]>(mockList);

  return (
    <div className={styles.ContentSection}>
      <OrdersStatus list={ordersList} />
    </div>
  );
};

export default ContentSection;
