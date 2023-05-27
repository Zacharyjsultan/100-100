import React from "react";
import BouncingImage from "./BouncingImage";
import "./BouncingImage.css";

export default function Home() {
  return (
    <div className="big-kahuna">
      <div>
        <a href="/Landing">
          <button>
            welcome
            <BouncingImage />
          </button>
        </a>
      </div>
    </div>
  );
}
