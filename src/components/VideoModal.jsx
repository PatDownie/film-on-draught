function VideoModal({ modalToggle, modalContent }) {
  return (
    <div className="modal">
      <div className="modalframe">
        <div
          className="modalheader"
          onClick={() => {
            modalToggle();
          }}
        >
          X
        </div>
        <iframe className="modaliframe" width="560" height="315" src={modalContent} allow="autoplay"></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
