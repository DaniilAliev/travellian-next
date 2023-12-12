const openCloseMenu = (
	setPath: (path: string) => void,
	setIsMenuOpen: (isOpen: boolean) => void,
	router: any,
	path: string,
) => {
	setPath(router.pathname)
	if (router.pathname !== path) {
		setIsMenuOpen(false);
	}
}

export default openCloseMenu;