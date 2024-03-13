import { USER_CONST } from "@/const/userConst";
import { ReactNode, createContext, useState, useContext } from "react";

type UserContextState = {
	name: string;
	slug: string;
	setName: (name: string) => void;
};

const initialState: UserContextState = {
	name: "",
	slug: "",
	setName: () => {},
};

const UserContext = createContext<UserContextState>(initialState);

interface IUserContextProviderProps {
	children: ReactNode;
}

export const UserContextProvider = ({
	children,
}: IUserContextProviderProps) => {
	const [name, setName] = useState<string>(USER_CONST.NAME);
	const slug = USER_CONST.SLUG || "";

	return (
		<UserContext.Provider value={{ name, slug, setName }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserContext);

	if (context === undefined)
		throw new Error("useUserContext must be used within a UserContextProvider");

	return context;
};
