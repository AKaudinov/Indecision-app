import React from 'react';
import Modal from 'react-modal'


const OptionModal = ({selectedOption, onCloseModal}) => ( //short hand/implicit return without {return(jsx here);}
    <Modal
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        onRequestClose={onCloseModal}>
            <h3>Selected Option</h3>
            {selectedOption && <p>{selectedOption}</p>}
            <button onClick={onCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;
