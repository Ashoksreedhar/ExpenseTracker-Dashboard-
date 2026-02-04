

import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
    const [navbar, setNavbar] = useState({

        title: "",
        activeMenu: "",
    })

    return (
        <NavbarContext.Provider value={{ navbar, setNavbar }}>
            {children}
        </NavbarContext.Provider>
    )
}

export const useNavbar = () => useContext(NavbarContext)