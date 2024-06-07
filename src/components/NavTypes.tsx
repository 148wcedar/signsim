// https://bobbyhadz.com/blog/typescript-export-interface


export interface NavItemConfig {
  //id:			string;
  label:	string;
  route:	string;
}


export interface NavItemProps {
	config:			NavItemConfig;
  enabled:		boolean;
  onNavChange: (newRoute: string) => void;
}


export interface NavBarProps {
  itemConfigs:	NavItemConfig[];
  //currentId:		string;
  currentItemRoute:		string;
  onNavChange: (newRoute: string) => void;
}


export function getNavItemProps_FromNavBar(
	navBarProps: NavBarProps,
	itemIndex: number
): NavItemProps {
	//const itemCount: number = navBarProps.itemConfigs.length;
  //const itemConfig: NavItemConfig;

	if ( itemIndex < 0 ) throw new Error();
	if ( itemIndex >= navBarProps.itemConfigs.length ) throw new Error();

	const itemConfig: NavItemConfig = navBarProps.itemConfigs[ itemIndex ];
	const itemEnabled: boolean = (itemConfig.route != navBarProps.currentItemRoute);
	const itemProps: NavItemProps = {
		config: itemConfig,
		enabled: itemEnabled,
		onNavChange: navBarProps.onNavChange
	};

	return itemProps;
}
