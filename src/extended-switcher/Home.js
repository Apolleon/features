import React, { useState } from "react";
import Switcher from "./Switcher";

const defaultValue = "Значение не выбрано";

const Home = () => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <section className="page">
      <div className="flex__column">
        <h1>Home</h1>
        <div className="flex">
          <h3>Выбранное значение:</h3>
          <h3>{value}</h3>
        </div>
        <Switcher value={value} handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Home;
