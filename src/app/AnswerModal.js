import React from 'react';
import Modal from 'react-modal';

const AnswerModal = ({ isOpen, onRequestClose, content }) => {
  console.log(isOpen, content)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Answer Modal"
      className="modal-content"
      overlayClassName="answermodal"
    >
      <div className="p-4 bg-white rounded">
        <h2 className="text-xl font-bold mb-4">Answer</h2>
        <p>{content}</p>
        <button
          onClick={onRequestClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AnswerModal;
