import { useState } from "react";
import styles from "./LandingPageSection.module.scss";
import SuccessModalComponent from "../success-modal/SuccessModalComponent";
import FormComponent from "../form/FormComponent";

const LandingPageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <section className={styles.landing_section}>
        <FormComponent />
      </section>
      {isModalOpen && (
        <SuccessModalComponent closeDialog={() => setIsModalOpen(false)}>
          <h1>Ej</h1>
        </SuccessModalComponent>
      )}
    </>
  );
};

export default LandingPageSection;
