import PropTypes from "prop-types";
import "./InputContainer.css";

function InputContainer({ label, img, name, handle_change, value }) {
  return (
    <div className="input_container">
      <label htmlFor={label}>{label}</label>
      <div className="input_wrapper">
        <div className="image_container">
          <img src={img} alt="Icon" style={{ maxWidth: "2rem" }} />
        </div>
        <input
          onChange={handle_change}
          type="number"
          placeholder="0"
          name={name}
          id={label}
          value={value === 0 ? "" : value} 
        />
      </div>
    </div>
  );
}

InputContainer.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle_change: PropTypes.func,
  value: PropTypes.number, 
};

export default InputContainer;
