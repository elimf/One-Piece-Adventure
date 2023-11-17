import React from "react";
import { Typography } from "@mui/material";
interface TitleHomeProps {
  inputString: string;
}

const TitleHome: React.FC<TitleHomeProps> = ({ inputString }) => {
  return (
    <Typography variant="h1" component="h2">
      <div className="wavy">
        {inputString.split("").map((char, index) =>
          char === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span
              key={index}
              style={{ "--i": index + 1 } as React.CSSProperties}
            >
              {char}
            </span>
          )
        )}
      </div>
    </Typography>
  );
};

export default TitleHome;
