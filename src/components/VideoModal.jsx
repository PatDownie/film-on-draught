function VideoModal({ modalToggle, modalContent }) {
  function stopPropagation(event) {
    event.stopPropagation();
  }

  return (
    <div
      className="modal"
      onClick={() => {
        modalToggle();
      }}
    >
      <div className="modalframe" onClick={(event) => stopPropagation(event)}>
        {/* <div
          className="modalheader"
          onClick={() => {
            modalToggle();
          }}
        >
          X
        </div> */}
        <iframe className="modaliframe" width="560" height="315" src={modalContent} allow="autoplay"></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
