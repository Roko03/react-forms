import styles from "./OrderDetailComponent.module.scss";

interface OrderDetailComponentProps {
  orderDetail: Order;
}

const OrderDetailComponent: React.FC<OrderDetailComponentProps> = ({
  orderDetail,
}) => {
  let coutry;
  switch (orderDetail.contact.country) {
    case "croatia":
      coutry = "Hrvatska";
      break;
    case "bih":
      coutry = "Bosna i Hercegovina";
      break;
    case "serbia":
      coutry = "Srbija";
      break;
    case "slovenia":
      coutry = "Slovenija";
      break;
  }

  return (
    <div className={styles.order_details}>
      <h1>Podaci narudžbe</h1>
      <ul className={styles.order_details__list}>
        <li>
          <p>
            Ime: <span>{orderDetail.contact.name}</span>
          </p>
        </li>
        <li>
          <p>
            Email: <span>{orderDetail.email}</span>
          </p>
        </li>
        <li>
          <p>
            Država: <span>{coutry}</span>
          </p>
        </li>
        <li>
          <p>
            Adresa: <span>{orderDetail.contact.address}</span>
          </p>
        </li>
        <li>
          <p>
            Način plačanja:{" "}
            <span>
              {orderDetail.type === "card" ? "Kartično" : "Gotovinski"}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OrderDetailComponent;
