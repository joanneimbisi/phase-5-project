export const login = (formData) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((res) => {
            dispatch({ type: 'LOGIN', payload: res });
        });
      } else {
        resp.json().then((errorData) => {
            dispatch({ type: 'LOGIN_ERROR', payload: errorData })
        });
      }
    });
  };
}
export const signup = (formData) => {
    return (dispatch) => {
    fetch('/users', { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then((resp) => {
        if (resp.ok) {
         resp.json().then((res)=> {
            dispatch({type: 'SIGN_UP', payload: res})
         })
        } else {
            resp.json().then((errorData) => {
                dispatch({ type: 'LOGIN_ERROR', payload: errorData })
        })
    }
    })       
;}
}

export const logout = (user) => {
    return (dispatch) => {
    fetch(`/users/${user.id}`, { 
      method: "DELETE", 
      headers: {
          "Content-Type": "application/json"
      },          
  })
  .then(resp => resp.json())
  .then(data => { 
           console.log(data)
           dispatch({type: 'LOG_OUT', payload: null })
  }) 
  
  
  }
}


