import {	NavBarProps
					// ,
					// NavItemProps,
					// NavItemConfig
} from "./NavTypes"
import React from "react";



export function Header() {
  const [currentRoute, setCurrentRoute] = React.useState<string>("/home");
	const handleNavChange = (newRoute: string) => { setCurrentRoute(newRoute); }
	const itemConfigArray = [
		{ label: "Home", route: "/home" },
		{ label: "About", route: "/about" },
	];

	const footerNavBarProps: NavBarProps = {
		itemConfigs: itemConfigArray,
		currentItemRoute: currentRoute,
		onNavChange:	handleNavChange
	};
	
	if (footerNavBarProps.itemConfigs.length){
	}


  return (
    <div>
			<p> header </p>
    </div>
  )
}



/***

	const footerNavBarProps: NavBarProps = {
		itemConfigs: [
			{ id: "0", label: "Home", route: "/home" },
			{ id: "1", label: "About", route: "/about" },
		],
		onNavChange:	handleNavChange
	};
	
	if (currentItemId){
	}
	if (footerNavBarProps.itemConfigs.length){
	}

***/