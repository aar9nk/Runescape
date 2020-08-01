import React from "react";
import Slider from "@material-ui/lab/Slider";
import SimpleModal from "./SimpleModal";

class SliderObject extends React.Component {
  state = {
    value: 0,
    currency: 0,
  };

  handleChange = (event, value) => {
    const conversion = 0.9;
    const currencyDecimal = value * conversion;
    this.setState({ value });
    this.setState({ currency: currencyDecimal.toFixed(2) });
  };

  render() {
    const { value, currency } = this.state;

    return (
      <div className="sliderObject">
        <Slider
          value={value}
          onChange={this.handleChange}
          min={0}
          max={100}
          step={1}
        />
        <div className="valueBoxes">
          <h2>{value}M</h2>
          <h2>${currency}</h2>
        </div>
        <SimpleModal total={currency} />
      </div>
    );
  }
}
export default SliderObject;
