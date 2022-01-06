import React from "react";

function Modal({ modalInfo, setModal, modal }) {
  return (
    <div
      className="modal"
      onClick={() => {
        setModal(!modal);
      }}
    >
      <div className="modaltitle">
        <img
          className="modalImage"
          src={modalInfo.picture.thumbnail}
          alt={modalInfo.name.first}
        />
        <div className="modalcontent">
          <h2 style={{ color: "#58bcb4" }}>
            {modalInfo.name.first} {modalInfo.name.last}
          </h2>
          <p style={{ padding: "10px 0px 20px 0px" }}>
            Age: {modalInfo.dob.age}
          </p>
          <p>
            {modalInfo.location.street.number} {modalInfo.location.street.name}
          </p>
          <p>
            {modalInfo.location.city}, {modalInfo.location.state}
            {modalInfo.location.postcode}
          </p>
          <p>{modalInfo.cell}</p>
          <p>{modalInfo.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
