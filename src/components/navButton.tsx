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
		console.log("gomb")
		event.stopPropagation()
	}

	return (
		<Button
			sx={{
				color: "white",
				display: "block",
				width: "100%",
				height: "100%",
			}}
		>
			<Link
				style={{
					textDecoration: "none",
					color: props.color,
					fontFamily: "Papyrus",
					fontSize: "15px",
				}}
				href={"/" + link}
				key={props.link}
				onClick={handleCloseNavMenu}
				prefetch={false}
			>
				{linkText}
			</Link>
		</Button>
	)
}
export default NavButton
