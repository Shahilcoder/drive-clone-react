import React from "react";
import "./DriveFile.css";

const DriveFile = () => {
  return (
    <div className="driveFile">
      <div className="file__img">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/303x289"
          alt="File Image"
        />
      </div>
      <div className="file__info">
        <div className="file__typeIcon"></div>
        <div className="file__infoName">Data Structure </div>
      </div>
    </div>
  );
};

export default DriveFile;
