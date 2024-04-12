/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



function Modal() {
const [isModalOpen, setIsModalOpen] = useState();
const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};
    return (
        <div>
             <button
                        onClick={openModal}
                        className='btn-primary-login rounded-full button-modal'
                    >
                        <FontAwesomeIcon icon={faUser} /> Login
                    </button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button onClick={closeModal} className="btn btn-close">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Modal