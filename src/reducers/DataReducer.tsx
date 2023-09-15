const INITIAL_STATE: InitialState = {
  payouts: [],
};

const AppReducer = (
  state = INITIAL_STATE,
  action: { payload: Payout[]; type: string }
): InitialState => {
  const { payload, type } = action;
  switch (type) {
    case "SET_PAYOUTS_ACTION":
      return {
        ...state,
        payouts: payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
