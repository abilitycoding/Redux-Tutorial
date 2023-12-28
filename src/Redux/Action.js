import * as types from "./ActionTypes";
import axios from "axios";

export const DepositAction = (Money) => {
  console.log("Money: ", Money);
  return {
    type: types.DEPOSIT,
    payload: Money
  };
};

export const WithdrawnAction = (Money) => {
  console.log("Money: ", Money);
  return {
    type: types.WITHDRAWN,
    payload: Money
  };
};

export const CheckBalanceAction = (userData) => {
  const [Balance, setBalance] = useState(null);
  axios
    .post("", userData)
    .then((res) => {
      setBalance(res.data.Balance);
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: types.BALANCE,
    payload: Balance
  };
};
