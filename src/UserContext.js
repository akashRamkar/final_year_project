import React, { useContext, useState } from "react";

const UserData = React.createContext();
export function useUserContext() {
	return useContext(UserData);
}
export default function UserDataProvider(props) {
	const [userEmail, setUserEmail] = useState();
	const [userName, setUserName] = useState();

	const value = { userEmail, setUserEmail, userName, setUserName };

	return <UserData.Provider value={value}>{props.children}</UserData.Provider>;
}
