
export const asyncHelper = (dispatch, state) => (action) => {
  console.log(action);

  if (typeof action === 'function') {
    return action(dispatch, state);
  }
  return dispatch(action);
};
