var initialState = {
    Formlist: []
}
export default function FormDataRaducer(state = initialState, action) {
    switch (action.type) {
        case "Add":
            state = {Formlist:action.payload}
            return state
        default:
            return state;
    }
}