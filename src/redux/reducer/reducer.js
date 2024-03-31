let initialState = {
    count:0
}

// state : 저장해주고 싶은 state를 매개변수로 가져간다.
// action : action에 따라 어떤 실행을 할지 정해준다.
function reducer(state=initialState, action) {
    console.log("action은 뭘까", action);
    if(action.type === "INCREMENT"){
        // 객체 반환
        return {...state, count:state.count + action.payload.num};
    } else if (action.type === "DECREMENT"){
        return {...state, count:state.count - action.payload.num};
    }

    return {...state};
}


export default reducer