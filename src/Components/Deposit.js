import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DepositAction } from "../Redux/Action";

const Deposit = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.Money);
  const Money = 10;

  const handleDeposit = () => {
    dispatch(DepositAction(Money))
  };

  return (
    <div>
      Deposit
      <button onClick={handleDeposit}>Deposit</button>
      <h3>Money: {reduxBankData}</h3>
    </div>
  );
};

export default Deposit;