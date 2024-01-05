import { useContext } from "react";

import Guest from "./Guest";
import User from "./User";
import Admin from "./Admin";
import { GlobalContext } from "./Context/context";

import { decodeToken } from "react-jwt";

export default function App() {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state)



  const DecodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const result = decodeToken(token)
      return result?.role
    }

  }

  const Roles = {
    'admin': Admin,
    'user': User,
    'guest': Guest,
  };

  const getComponentByRoles = (params) => Roles[params] || Roles["guest"];

  const userRN = DecodeUser(state.token)

  const CurrentRole = getComponentByRoles(userRN);

  return (
    <>
      {/* {state.token ? 'yes' : "no"} */}
      <CurrentRole />
    </>
  );
}
