import { Box, Button, Typography } from "@mui/material"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import React from "react"

function NavButton(props) {
	const { t, lang } = useTranslation()
	const link: string = props.link
	const linkText = t("common:" + link)
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(null)
	}

	return (
		<Button sx={{ my: 2, color: "white", display: "block" }}>
			<Link
				style={{
					textDecoration: "none",
					color: "red",
                    fontFamily:"Papyrus",
                    fontSize: "15px",
					
				}}
				href={"/" + link}
				key={props.link}
				onClick={handleCloseNavMenu}
			>
				{linkText}
			</Link>
		</Button>
	)
}
export default NavButton
