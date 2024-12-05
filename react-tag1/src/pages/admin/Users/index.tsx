import UserOverview from "../../../components/Users/UserOverview.tsx";
import AbortExercise from "../../../components/Exercises/AbortExercise.tsx";
import Modal from "../../../components/globals/Modal.tsx";
import {useState} from "react";

const Users = () => {

    const [modalOpen, setModalOpen] = useState(false)

    function handleModal() {
        setModalOpen(!modalOpen)
    }

    return <>
        <button onClick={handleModal}>Open modal</button>
        <Modal onClose={handleModal} isOpen={modalOpen}>
            <h3>modal users</h3>
            <p>hallo users</p>
        </Modal>
        {/* <EffectExercise/>*/ }
        <UserOverview/>
        {/*<AbortExercise/>*/ }
    </>
}

export default Users;