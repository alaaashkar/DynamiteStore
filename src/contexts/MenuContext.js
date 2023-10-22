import React, { createContext, useContext, useState } from "react"

const menuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const value = {
    isMenuClicked, setIsMenuClicked
  }

  return (
    <menuContext.Provider value={value}>
      {children}
    </menuContext.Provider>
  )
};

export const useMenu = () => useContext(menuContext)