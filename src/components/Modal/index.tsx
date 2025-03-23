import ModalBody from "../ModalBody";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";
import { ModalContainer } from "./styles";
import { ToastContentProps } from "react-toastify";

type Props = ToastContentProps<{
   title: string;
   message: string;
   notice?: string;
   confirmButton: string;
   confirmAction?: () => void;
   cancelButton?: string;
   cancelAction?: () => void;
}>;

const Modal = ({
   data: {
      title,
      message,
      notice,
      confirmButton,
      cancelButton,
      confirmAction,
      cancelAction,
   },
   closeToast,
}: Props) => {
   return (
      <ModalContainer>
         <ModalHeader>{title}</ModalHeader>
         <ModalBody notice={notice}>{message}</ModalBody>
         <ModalFooter
            cancelButton={cancelButton}
            confirmAction={confirmAction || closeToast}
            cancelAction={cancelAction || closeToast}
         >
            {confirmButton}
         </ModalFooter>
      </ModalContainer>
   );
};

export default Modal;
