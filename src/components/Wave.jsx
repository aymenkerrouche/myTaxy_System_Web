import React from "react";

function Wave({ color }) {
  return (
    <div className="relative py-1">
      <svg
        className="absolute bottom-0 left-0 right-0 h-16 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={color || "#fff"}
          d="M0,96L80,96C160,96,320,96,480,122.7C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;
