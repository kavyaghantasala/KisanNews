import React from "react";
import "./HeaderComp.css";
import { FiMenu } from "react-icons/fi";
import { GrRefresh } from "react-icons/gr";

const HeaderComp = ({ onRefresh, refreshing }) => {
  return (
    <div className="headerMainComp">
      <div className="sidecontainer">
        <FiMenu className="headerMainCompIcon" />
      </div>
      <h1>Kisan News</h1>
      <div className="sidecontainer">
        <button
          className="refreshBtn"
          onClick={onRefresh}
          disabled={refreshing}
          title="Refresh"
        >
          <GrRefresh className={`headerMainCompIcon ${refreshing ? "spin" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default HeaderComp;
