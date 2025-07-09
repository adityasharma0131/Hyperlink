import React from "react";
import PropTypes from "prop-types";
import { CiCircleInfo } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";

const ToolButton = ({
  icon: Icon = CiCircleInfo,
  text = "WHY CHOOSE US",
  className = "",
}) => {
  return (
    <div className={`section-title ${className}`}>
      <span className="section-icon">
        <Icon />
      </span>
      <span>{text}</span>
    </div>
  );
};

ToolButton.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ToolButton;
