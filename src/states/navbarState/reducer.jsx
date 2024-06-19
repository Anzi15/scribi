const initialState = {
    isSideBarOpen: false,
    sideBarOpenType: "Permanent"
}

function reducer(state, action={payload: "Permanent"}){
    const type = action.type
    switch(type){
        case "TOGGLE_NAVBAR":
            return{
                ...state,
                isSideBarOpen: !state.isSideBarOpen,
                sideBarOpenType: action.payload
            };
            default:{
                throw new Error(`Unknown Action ${action.type}`)
            }
    }
}

export {initialState, reducer}