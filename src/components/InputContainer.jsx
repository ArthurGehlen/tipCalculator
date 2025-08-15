import PropTypes from "prop-types";

import "./InputContainer.css";

function InputContainer({ label, img }) {
  return (
    <div className="input_container">
      <label htmlFor={label}>{label}</label>
      <div className="input_wrapper">
        <div className="image_container">
          <img src={img} alt="Icon" style={{ maxWidth: "2rem" }} />
        </div>
        <input type="number" placeholder="0" name={label} id={label} />
      </div>
    </div>
  );
}

InputContainer.PropTypes = {
  label: PropTypes.string.isRequired,
};

export default InputContainer;
