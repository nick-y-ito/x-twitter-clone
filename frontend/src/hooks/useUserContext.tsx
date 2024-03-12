import { ReactNode, createContext, useState, useContext } from "react";

interface IUserContext {
	name: string;
	slug: string;
	setName: (name: string) => void;
}

const UserContext = createContext<IUserContext>({
	name: "",
	slug: "",
	setName: () => {},
});

export const useUserContext = () => {
	return useContext(UserContext);
};

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
