import { IconSettings } from "@/assets/images/icons";
import { useUserContext } from "@/hooks/useUserContext";

export const Header = () => {
	const { name, setName } = useUserContext();

	const handleAvatarClick = async () => {
		const newName = await prompt("Edit your name.", name);
		if (!newName) return;
		setName(newName);
		alert("Name updated");
	};

	return (
		<header>
			<div className="flex justify-between items-center h-13 px-4">
				<button onClick={handleAvatarClick}>
					<figure className="size-9 rounded-full bg-white"></figure>
				</button>
				<img src="/z.png" alt="logo" className="h-8" />
				<IconSettings className="text-white size-5" />
			</div>
			<nav className="border-b border-border">
				<div className="flex h-13">
					<button className="px-4 h-full">
						<div className="h-full flex items-center relative">
							For you
							<div className="absolute bottom-0 h-1 w-full bg-accent rounded-full" />
						</div>
					</button>
					<button className="p-4 h-full">
						<div className="h-full flex items-center">Following</div>
					</button>
				</div>
			</nav>
		</header>
	);
};
