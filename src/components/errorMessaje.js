import React from "react";

function ErrorMessaje({ error }) {
  return (
    <div className="alert alert-danger" role="alert">
      {error.message}
    </div>
  );
}

export default ErrorMessaje;
