
import { SPACE_LIST, TOGGLE_MENU} from "./actionTypes";

export async function setSpaceList (space_list) { 
  return {
    type: SPACE_LIST,
    space_list
  };
};

export async function toggleMenu (toggle) { 
  return {
    type: TOGGLE_MENU,
    toggle
  };
};