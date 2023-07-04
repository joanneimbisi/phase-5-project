export const loadBrands = () =>{
    
    return dispatch => {
        fetch('/brands',{
            method:"GET", 
              headers:{ 
                "Content-Type": "application/json"
              }
          })
          .then(resp => resp.json())
          .then(data => {
                const action = { type: "LOAD_BRANDS", payload: data}
            dispatch(action)
          })
    }
}