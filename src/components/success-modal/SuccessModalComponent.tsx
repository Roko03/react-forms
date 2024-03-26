import DialogComponent from "../dialog/DialogComponent";
import styles from "./SuccessModalComponent.module.scss";

interface SuccessModalComponentProps {
  closeDialog: () => void;
  children: React.ReactNode;
}

const SuccessModalComponent: React.FC<SuccessModalComponentProps> = ({
  children,
  closeDialog,
}) => {
  return (
    <DialogComponent closeDialog={closeDialog}>{children}</DialogComponent>
  );
};

export default SuccessModalComponent;
