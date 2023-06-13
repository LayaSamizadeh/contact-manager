import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "50px" }}>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;
