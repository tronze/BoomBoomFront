import { createAction, handleActions } from "redux-actions";

const SET_START_POSITION = "navigation/SET_START_POSITION";
const SET_END_POSITION = "navigation/SET_END_POSITION";
const SET_RESULT = "navigation/SET_RESULT";

export const setStartPosition = createAction(
  SET_START_POSITION,
  (value) => value
);
export const setEndPosition = createAction(SET_END_POSITION, (value) => value);
export const setResult = createAction(SET_RESULT, (value) => value);

const initialState = {
  startPosition: "",
  endPosition: "",
  result: {
    routes: [],
    congestions: [],
  },
};

export default handleActions(
  {
    [SET_START_POSITION]: (state, action) => {
      state.startPosition = action.payload;
      return state;
    },
    [SET_END_POSITION]: (state, action) => {
      state.endPosition = action.payload;
      return state;
    },
    [SET_RESULT]: (state, action) => {
      state.result = action.payload;
      return state;
    },
  },
  initialState
);
