import React from "react";
import BouncingImage from "./BouncingImage";
import "./BouncingImage.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="big-kahuna">
      <div>
        <a href="/Landing">
          <Button variant="contained">
            welcome
            <BouncingImage />
          </Button>
        </a>
      </div>
    </div>
  );
}
