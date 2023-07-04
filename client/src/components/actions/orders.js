export const loadOrders = () => {
  // thunk middleware uses these actions to make async calls
  // it expects a function to be returned
  //  the function itself takes in a parameter called dispatch

  // dispatch action -> update reducers state -> useSelector -> access reducers state

  return (dispatch) => {
    // async calls
    fetch("/orders")
      .then((resp) => resp.json())
      .then((data) => {
        const action = { type: "LOAD_ORDERS", payload: data };
        dispatch(action);
        // we dispatch the action to the reducer
      });
  };
};

export const deleteOrder = (id) => {
  return (dispatch) => {
    // deletes it from backend
    fetch(`/orders/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // update reducer state
        // deletes it from frontend
        const action = {
          type: "DELETE_ORDER",
          payload: id,
        };
        // dispatch to reducer
        dispatch(action);
      });
  };
};

export const editOrder = (id, formData) => {
  return (dispatch) => {
    fetch(`/orders/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('data', data)
        // dispatch an action for editing our order
        const action = {
          type: "EDIT_ORDER",
          payload: data,
        };
        dispatch(action);
      });
  };
};