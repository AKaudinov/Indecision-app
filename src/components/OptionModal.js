import React from 'react';
import Modal from 'react-modal'


const OptionModal = ({selectedOption, onCloseModal}) => ( //short hand/implicit return without {return(jsx here);}
    <Modal
        className="modal" //custom classname for the modal content container
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200} //wait a certain time(200 miliseconds) before gutting the div, removing it from the DOM
        onRequestClose={onCloseModal}>
            <h3 className="modal__title">Selected Option</h3>
            {selectedOption && <p className="modal__body">{selectedOption}</p>}
            <button className="button" onClick={onCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;
