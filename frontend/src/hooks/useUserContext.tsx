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
	const [name, setName] = useState("Nick");
	const slug = "nick-y-ito";

	return (
		<UserContext.Provider value={{ name, slug, setName }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};
