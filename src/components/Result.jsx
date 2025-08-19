import PropTypes from "prop-types";
import { dollar } from "./utils/MoneyFormatter";

import "./Result.css";

function Result({ label, total = 0.0 }) {
  return (
    <div id="result">
      <div className="label_section">
        <p>{label}</p>
        <span>/ person</span>
      </div>
      <p className="total">{dollar.format(total)}</p>
    </div>
  );
}

Result.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number,
};

export default Result;
