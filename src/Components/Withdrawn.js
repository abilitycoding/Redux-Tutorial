import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawnAction } from "../Redux/Action";

const Withdrawn = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.Money);
  const Money = 10;

  const handleDeposit = () => {
    dispatch(WithdrawnAction(Money))
  };

  return (
    <div>
      Withdrawn
      <button onClick={handleDeposit}>Withdrawn</button>
      <h3>Money: {reduxBankData}</h3>
    </div>
  );
};

export default Withdrawn;
