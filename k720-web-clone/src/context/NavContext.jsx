import { createContext, useState } from "react";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <NavContext.Provider value={[navOpen, setNavOpen]}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;
