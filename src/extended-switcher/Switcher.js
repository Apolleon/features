import React from "react";
import "./switcher.css";

const Switcher = ({ value, handleChange }) => {
  return (
    <div className="switcher">
      <label className="switcher-label switcher-left" htmlFor="Выключить">
        Off
        <input
          id="Выключить"
          className="switcher-radio-left"
          type="radio"
          value="Выключить"
          onChange={handleChange}
          checked={"Выключить" === value}
        />
      </label>

      <label
        className="switcher-label switcher-neutral"
        htmlFor="Значение не выбрано"
      >
        -
        <input
          id="Значение не выбрано"
          className="switcher-radio-neutral"
          type="radio"
          value="Значение не выбрано"
          onChange={handleChange}
          checked={"Значение не выбрано" === value}
        />
      </label>

      <label className="switcher-label switcher-right" htmlFor="Включить">
        On
        <input
          id="Включить"
          className="switcher-radio-right"
          type="radio"
          value="Включить"
          checked={"Включить" === value}
          onChange={handleChange}
        />
      </label>

      <div className="switcher-slider" />
    </div>
  );
};

export default Switcher;
