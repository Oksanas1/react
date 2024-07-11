import React from "react";

export default function Info({info}) {
  if(info.length === 0) {
    return null;
  }

  return (
    <div className="message">
      <p className="info">{info}</p>
    </div>);
}
