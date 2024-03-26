import { useState } from "react";
import styles from "./LandingPageSection.module.scss";
import DialogComponent from "../dialog/DialogComponent";

const LandingPageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      <section>
        <h1>ej</h1>
      </section>
      {isModalOpen && (
        <DialogComponent closeDialog={() => setIsModalOpen(false)}>
          <h1>Ej</h1>
        </DialogComponent>
      )}
    </>
  );
};

export default LandingPageSection;
