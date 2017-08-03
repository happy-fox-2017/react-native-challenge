const initialState = {
    news: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_NEWS':
            return { news: action.payload.data}
        default:
            return state
    }
}