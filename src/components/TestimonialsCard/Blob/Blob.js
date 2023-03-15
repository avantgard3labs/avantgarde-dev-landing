import { useState } from "react";
import "./Blob.css"

function Blob({className}) {

  return (
      <div className={"blobContainer "}>
          <div className={"blob2 "  +  className}></div>
      </div>
  );
}

export default Blob