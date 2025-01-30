import React from "react";

interface IProps {
  type?: "button" | "submit";
  onClick?: (e: any) => void;
  children: any;
}

const Button: React.FC<IProps> = ({ onClick, children, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="bg-orange-500 text-white text-xl px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
