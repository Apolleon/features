import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useBlocker } from "react-router-dom";

const Page = () => {
  const [inputValue, setInputValue] = useState({ input: "" });
  const navigate = useNavigate();

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      inputValue.input && currentLocation.pathname !== nextLocation.pathname
  );

  const handleChangeInput = ({ target: { name, value } }) =>
    setInputValue({ [name]: value });

  const leavePage = () => {
    blocker.proceed();
  };
  console.log(inputValue);
  const cancelNavigation = () => blocker.reset();

  return (
    <section className="page">
      <div className="flex__column">
        <h1>Страница</h1>
        <h3>{inputValue.input}</h3>
        <NavLink to={"/"}>Назад</NavLink>
        <button onClick={() => navigate(-1)}>Кнопка назад</button>
        <input name="input" onChange={handleChangeInput} />
      </div>
      {blocker.state === "blocked" && (
        <div>
          <button onClick={leavePage}> Уйти со стриницы</button>
          <button onClick={cancelNavigation}> Остаться на стрнице</button>
        </div>
      )}
    </section>
  );
};

export default Page;
