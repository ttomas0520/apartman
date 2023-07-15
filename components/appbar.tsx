import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import Link from "next/link"
import NavButton from "./navButton"
import { Grid } from "@mui/material"

function ResponsiveAppBar() {
	const router = useRouter()
	const { t, lang } = useTranslation()
	const title = t("common:title")

	const links = ["aboutus", "programs", "gallery", "contact"]
	const pages = [
		t("common:aboutus"),
		t("common:programs"),
		t("common:gallery"),
		t("common:contact"),
	]
	const settings = ["Profile", "Account", "Dashboard", "Logout"]
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(null)
		console.log(event.target)
	}

	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "#bfa96b", position: "sticky", top:0 }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{
							mr: { sx: 1, md: 3, lg: 3 },
							height: 50,
							width: 50,
							maxHeight: { xs: 233, md: 167 },
							maxWidth: { xs: 350, md: 250 },
						}}
						alt="The house from the offer."
						src="logo.png"
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						{title}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none", textAlign: "center" },
							}}
						>
							{links.map((link) => (
								<MenuItem key={link} onClick={handleCloseNavMenu}>
									<NavButton link={link} />
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="overline"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						{title}
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							textAlign: "center",
						}}
					>
						<Grid container spacing={2} justifyContent="center">
							{links.map((link) => (
								<Grid item xs={12} sm={6} lg={3} key={link}>
									<Box sx={{ display: "flex", justifyContent: "center" }}>
										<NavButton link={link} />
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
