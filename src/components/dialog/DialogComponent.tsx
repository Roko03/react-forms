import { useEffect, useRef } from "react";
import styles from "./DialogComponent.module.scss";

interface DialogComponentProps {
  closeDialog: () => void;
  children: React.ReactNode;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  closeDialog,
  children,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dialogAnimation = () => {
    if (mainRef && mainRef.current) {
      mainRef.current.style.opacity = "0";
      mainRef.current.style.transition =
        "opacity 378ms cubic-bezier(0.4, 0, 0.2, 1)";
    }
    setTimeout(() => {
      if (mainRef && mainRef.current) {
        mainRef.current.style.opacity = "1";
      }
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    dialogAnimation();

    const handleOutsideClick = (event: any) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeDialog();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className={styles.dialog_modal} ref={mainRef}>
      <div className={styles.dialog_modal__box} ref={dialogRef}>
        {children}
      </div>
    </div>
  );
};

export default DialogComponent;
