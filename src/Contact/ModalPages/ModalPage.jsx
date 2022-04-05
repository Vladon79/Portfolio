
import Modal from "../Modal/Modal";
import PhoneModal from "./PhoneModal";



const ModalPage = (props) => {

    return (
        <Modal activeModal={props.activeModal} setActiveModal={props.setActiveModal}>
            {props.activeModal === true && props.titleModal === 'phone' && <PhoneModal/>}
        </Modal>
    )
}

export default ModalPage