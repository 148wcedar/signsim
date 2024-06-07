import {	NavBarProps,
					NavItemProps,
					//NavItemConfig,
					getNavItemProps_FromNavBar
} from "./NavTypes"
//import React from "react";
import { NavItem } from "./NavItem"
import '../Common.css';


interface PropsContainer {
  navBarProps:		NavBarProps;
}


export function NavBar({ navBarProps }: PropsContainer) {
	let itemArray: JSX.Element[] = [];
	let itemProps: NavItemProps;
	
	for (let i = 0; i < navBarProps.itemConfigs.length; i++) {
		itemProps = getNavItemProps_FromNavBar(navBarProps, i);
		itemArray.push(
			<div
				key={itemProps.config.route}
				className="navbar_flexitem"
			>
				<NavItem
					navItemProps={itemProps}
				/>
			</div>
		);
	}

  return (
    <>
    	{itemArray}
    </>
  )
}
