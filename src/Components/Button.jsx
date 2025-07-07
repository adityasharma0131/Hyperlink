import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "primary", children, onClick }) => {
  const buttonClass = type === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button className={`btn ${buttonClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
