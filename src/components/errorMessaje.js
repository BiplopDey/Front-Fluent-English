import React from "react";

function ErrorMessaje(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.errorResponse.data}
    </div>
  );
}

export default ErrorMessaje;
