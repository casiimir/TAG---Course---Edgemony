import { useState } from "react";
import { OrderList } from "@/types/index";
import styles from "./index.module.scss";

const OrdersStatus = ({ list }: { list: OrderList[] }) => {
  const [isActive, setActive] = useState<number>(0);

  const onHandleActiveItem = (id: number) => {
    setActive(id);
  };

  return (
    <div className={styles.OrdersStatus}>
      {list.map((item) => (
        <div
          className={`${styles.item} ${isActive === item.id && styles.active}`}
          onClick={() => onHandleActiveItem(item.id)}
          key={item.id}
        >
          <div className={styles.content}>
            <h4>{item.name}</h4>
            <h2>{item.value}</h2>
            {item.status
              ? `${item.status} than usual`
              : "* Updated every new order"}
          </div>
          <div className={styles.image}>
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersStatus;
