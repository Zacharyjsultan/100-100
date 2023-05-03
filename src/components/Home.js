import React from "react";
import BouncingImage from "./BouncingImage";
import "./BouncingImage.css";

export default function Home() {
  return (
    <div>
      <a href="/Landing">
        <button>
          {/* <img src="/logo1.png" alt="button" /> */}
          <BouncingImage />
        </button>
      </a>
    </div>
  );
}
