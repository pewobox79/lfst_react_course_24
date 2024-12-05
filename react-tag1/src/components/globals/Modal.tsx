import styles from '../../styles/Modal.module.css'
import {createPortal} from "react-dom";

const Modal = ({isOpen, onClose, children}) => {

    if (!isOpen) return null

    return createPortal(<div className={ styles.modalWrapper }>
        <div className={ styles.innerModal }>
            { children }
        </div>
        <button onClick={onClose}>Close</button>
    </div>, document.getElementById("modalElement"))
}

export default Modal