import React from "react";

function ErrorMesaje(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.errorMessage.data}
    </div>
  );
}

export default ErrorMesaje;
