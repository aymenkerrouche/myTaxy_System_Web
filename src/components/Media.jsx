import React from "react";

function Media({ href, target, icon, title }) {
  return (
    <a
      href={href}
      target={target || "_blank"}
      className="transition hover:scale-105"
    >
      <div className="flex flex-col items-center justify-center">
        {icon}
        <p>{title}</p>
      </div>
    </a>
  );
}

export default Media;
