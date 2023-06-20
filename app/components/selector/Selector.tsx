import React from "react";
import "./Selector.css";
export default function Selector() {
  return (
    <div className="selector">
      <div className="album">Photos</div>
      <div className="liked">
        <i className="bi bi-shield-lock"></i> Liked
      </div>
    </div>
  );
}
