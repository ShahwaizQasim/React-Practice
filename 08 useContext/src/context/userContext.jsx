import { createContext,useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "Syed Shahwaiz",
  });

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;