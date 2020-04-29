import React from 'react'
import Modal from 'react-modal'


  
const OptionModal = (props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleModalVisibility}
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        <hr></hr>
      {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleModalVisibility}>Okay</button>
    </Modal>
)

export {OptionModal}