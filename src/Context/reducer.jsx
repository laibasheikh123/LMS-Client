export const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            console.log("Yes I called", action.token)
            return { ...state, token: action.token }


        default:
            break;
    }

}