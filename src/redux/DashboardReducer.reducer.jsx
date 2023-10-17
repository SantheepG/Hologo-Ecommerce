// reducer.js
const initialState = {
  dashboardClicked: false,
  usersClicked: false,
  historyClicked: false,
  analyticsClicked: false,
  ticketsClicked: false,
  salesClicked: false,
  reportsClicked: false,
  settingsClicked: false,
  newItemClicked: false,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLICKED":
      // Create a new object with all flags set to false
      const newFlags = Object.keys(state).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Set the clicked item to true
      newFlags[action.payload.item] = action.payload.value;

      return {
        ...newFlags,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
