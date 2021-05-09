import React from 'react'
import ModalStyle from './Modal.module.css'

const Modal = (props) => {
    return (
        <div>
        <div className={ModalStyle.backdrop}></div>
        <div className={ModalStyle.modalBody}>{props.children}        
        </div>
      </div>
    )
}

export default Modal
