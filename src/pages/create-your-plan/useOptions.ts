import { useReducer } from "react";

export type Plan = {
  howToDrink: string;
  coffeeType: string;
  amount: number;
  grind: string;
  interval: string;
};

export type OptionsAction = {
  type: `set_${keyof Plan}`;
  payload: string;
};

const reducer = function (state: Plan, action: OptionsAction): Plan {
  switch (action.type) {
    case "set_amount":
      return { ...state, amount: Number.parseInt(action.payload) };
    case "set_coffeeType":
      return { ...state, coffeeType: action.payload };
    case "set_grind":
      return { ...state, grind: action.payload };
    case "set_howToDrink":
      return { ...state, howToDrink: action.payload };
    case "set_interval":
      return { ...state, interval: action.payload };
  }
};

const useOptions = function () {
  return useReducer(reducer, {
    howToDrink: "",
    coffeeType: "",
    amount: -1,
    grind: "",
    interval: "",
  });
};

export { useOptions };
