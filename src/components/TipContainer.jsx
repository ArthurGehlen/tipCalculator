import PropTypes from "prop-types";

function TipContainer({ tip }) {
  return <div id="tip_container">{tip}%</div>;
}

TipContainer.PropTypes = {
  tip: PropTypes.number.isRequired,
};

export default TipContainer;
