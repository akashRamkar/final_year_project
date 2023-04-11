import { createContext, useState } from "react";



export const AppContext = createContext();

function AppContextProvider({children}){
      const[isLoggedIn,setIsLoggedIn] =useState(false);
      const[accountType,setAccountType] =useState("student");

      const [formData, setFormData] = useState({
        subject: "Java",
      });
      const value={
        isLoggedIn,
        setIsLoggedIn,
        accountType,
        setAccountType,
        formData,
        setFormData
      };

      return <AppContext.Provider value={value}>

        {children}

      </AppContext.Provider>
}

export default AppContextProvider;





