import { USER_CONST } from "@/const/userConst";
import { ReactNode, createContext, useState } from "react";

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

export const UserContext = createContext<UserContextState>(initialState);

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
