import { createContext, useState } from "react";

export const Global = createContext();

// context = provider + consumer
// Provider is here using .Provider & value='' and wrapping App.jsx
// Consumer is consuming the context there in component using useContext(contextName)

// provider 
const GlobalProvider = ({children}) => {
    const [user, setUser ] = useState();

  return (
    <>
      <Global.Provider value={{user, setUser}} >
        {children}
      </Global.Provider>
    </>
  )
}

export default GlobalProvider
