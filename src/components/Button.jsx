import React from "react";

function Button({ href, target, children, onClick }) {
  return (
    <a
      href={href}
      target={target || "_blank"}
      className="flex items-center gap-2 bg-white py-2 px-4 rounded-md capitalize text-lg transition duration-300 ease-in-out hover:bg-black hover:text-white hover:rotate-6 hover:-translate-y-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Button;
