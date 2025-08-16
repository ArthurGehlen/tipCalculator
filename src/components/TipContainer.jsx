import PropTypes from "prop-types";

import "./TipContainer.css";

function TipContainer({ tip }) {
  return (
    <div id="tip_container">
      <p className="tip">{tip}%</p>
    </div>
  );
}

TipContainer.PropTypes = {
  tip: PropTypes.number.isRequired,
};

export default TipContainer;
