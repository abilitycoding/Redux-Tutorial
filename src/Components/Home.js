import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const reduxBankData = useSelector((state) => state.BankData.Money);
  return (
    <div>
      Home
      <h3>Money: {reduxBankData}</h3>
    </div>
  );
};

export default Home;
