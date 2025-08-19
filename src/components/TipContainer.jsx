import PropTypes from "prop-types";

import "./TipContainer.css";

function TipContainer({ tip, onClick }) {
  return (
    <div id="tip_container" onClick={onClick}>
      <p className="tip">{tip}%</p>
    </div>
  );
}

TipContainer.PropTypes = {
  tip: PropTypes.number.isRequired,
};

export default TipContainer;
