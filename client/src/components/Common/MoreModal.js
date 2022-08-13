import React from 'react';
import Modal from './Modal';

export default function MoreModalItems() {
  return (
    <Modal>
      <button
        className="modal-box-item h-12 bg-white w-full text-14-bold text-red">
        Report Inappropriate
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-bold text-red">
        Unfollow
      </button>
      <button
        className="modal-box-item h-12 bg-white w-full text-14-light">
        Go to Post
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Share
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Copy Link
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Embed
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Cancel
      </button>
    </Modal>
  );
}
