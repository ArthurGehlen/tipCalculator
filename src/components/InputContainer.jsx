import PropTypes from "prop-types";

import "./InputContainer.css";

function InputContainer({ label, img }) {
  return <div>{label}</div>;
}

InputContainer.PropTypes = {
  label: PropTypes.string.isRequired,
};

export default InputContainer;
