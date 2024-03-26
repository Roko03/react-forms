import { useState } from "react";
import styles from "./LandingPageSection.module.scss";
import SuccessModalComponent from "../success-modal/SuccessModalComponent";
import FormComponent from "../form/FormComponent";
import OrderDetailComponent from "../order-detail/OrderDetailComponent";

const LandingPageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [orderDetail, setOrderDetail] = useState<Order | null>(null);

  return (
    <>
      <section className={styles.landing_section}>
        <h2>{`Račun -> Plaćanje`}</h2>
        <FormComponent
          openModal={() => setIsModalOpen(true)}
          setOrderDetail={(data: Order) => setOrderDetail(data)}
        />
      </section>
      {isModalOpen && orderDetail !== null && (
        <SuccessModalComponent closeDialog={() => setIsModalOpen(false)}>
          <OrderDetailComponent orderDetail={orderDetail} />
        </SuccessModalComponent>
      )}
    </>
  );
};

export default LandingPageSection;
