import PropTypes from "prop-types";

import "./Result.css"

function Result({ label, total=0.0 }) {
  return (
    <div>
      <p>{label}</p> 
      <p>{total}</p>
    </div>
  );
}

Result.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number,
};

export default Result;
