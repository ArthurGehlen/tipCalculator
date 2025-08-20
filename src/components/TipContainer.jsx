import PropTypes from "prop-types";
import "./TipContainer.css";

function TipContainer({ tip, onClick, selected }) {
  return (
    <div
      id="tip_container"
      className={selected ? "selected" : ""} 
      onClick={onClick}
    >
      <p className="tip">{tip}%</p>
    </div>
  );
}

TipContainer.propTypes = {
  tip: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default TipContainer;
