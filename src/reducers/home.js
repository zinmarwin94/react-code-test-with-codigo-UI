
import { SPACE_LIST,TOGGLE_MENU } from "../actions/actionTypes";  
 
const initialState = { 
  openMenu: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case TOGGLE_MENU:
        return {
          ...state,
          openMenu: action.toggle.toggle
        };
    default:
      return state;
  }
};

export default reducer;
