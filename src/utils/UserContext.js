import { createContext } from "react";

const UserContext = createContext({
  loggedInUser : "Superman"
}) ;

export default UserContext;