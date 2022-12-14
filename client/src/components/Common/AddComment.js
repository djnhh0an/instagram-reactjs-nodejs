import React, { useRef, useState } from 'react';

function AddComment() {
  const changeRef = useRef(null);
  const [textAreaSize, setAreaSize] = useState(18);
  const [isTyped, setTyped] = useState(false);

  return (
    <form className="add-comment-container">
      <textarea
        className="add-comment-input"
        style={{ height: textAreaSize }}
        placeholder="Add Comment..."
        aria-label="Add Comment..."
        ref={changeRef}
        onChange={(e) => {
          setAreaSize(changeRef.current.scrollHeight);
          setTyped(e.target.value.length > 0);
        }}
      />
      <button
        className="add-comment-button text-14-light text-blue"
        style={{ opacity: isTyped ? 1 : 0.3 }}>
        Post
      </button>
    </form>
  );
}
export default AddComment;
