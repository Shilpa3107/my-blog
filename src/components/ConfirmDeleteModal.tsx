// src/components/ConfirmDeleteModal.tsx

"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next'); // Set the app element to avoid screen reader issues

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Are you sure you want to delete this post?</h2>
      <div className="flex justify-end mt-4">
        <button onClick={onRequestClose} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
