
const kinddata = (state = {
    kindmenu:[],
    kindlist: []
},{type, data}) => {
    if(type === 'KIND_MENU'){
        state.kindmenu = data
    }
    if(type === 'KIND_LIST'){
        state.kindlist = data
    }
    return state
}
export default kinddata