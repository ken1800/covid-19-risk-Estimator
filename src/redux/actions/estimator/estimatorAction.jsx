import * as actionTypes from "../types";
import { createMessage } from "../messages";

export const getInputedata = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.INPUTED_DATA,
    payload: data,
  });
  dispatch(createMessage({ dataReceived: "Date received succesfully" }));
  setTimeout(
    () =>
      dispatch(
        createMessage({ dataReceived: "Hey We are done with your data" })
      ),
    4000
  );
};
