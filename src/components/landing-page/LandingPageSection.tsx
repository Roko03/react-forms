import { useState } from "react";
import styles from "./LandingPageSection.module.scss";
import SuccessModalComponent from "../success-modal/SuccessModalComponent";

const LandingPageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <section>
        <h1>ej</h1>
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
