import React, { createContext } from "react";

const FireContext = createContext();
export const FireContextPovider = ({ children }) => {
	return <FireContext.provider>{children}</FireContext.provider>;
};
