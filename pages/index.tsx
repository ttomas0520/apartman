import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography,
	styled,
} from "@mui/material"
import React from "react"
import Groups2Icon from "@mui/icons-material/Groups2"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import BathroomIcon from "@mui/icons-material/Bathroom"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import ResponsiveAppBar from "../src/components/appbar"
import Image from "next/image"
import { image5 } from "../src/importhelper"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate-plugin"
function Home() {
	const { t } = useTranslation()
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container>
				<Card
					sx={{ mt: 5, display: { xs: "grid", md: "flex" }, boxShadow: 15 }}
				>
					<CardContent
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box>
							<Typography
								align="justify"
								sx={{
									fontSize: { xs: "14px", md: "24px", lg: "24px" },
									textAlign: "center",
								}}
								component="div"
								dangerouslySetInnerHTML={{ __html: t("home:welcoming") }}
							>
								
							</Typography>
							<Grid
								container
								rowSpacing={1}
								columnSpacing={{ xs: 1, sm: 2, md: 3 }}
							>
								<Grid item xs={6}>
									<Card>
										<CardContent
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<Groups2Icon fontSize="large"></Groups2Icon>
												</Grid>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													{t("home:beds")}
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card>
										<CardContent
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<MeetingRoomIcon fontSize="large"></MeetingRoomIcon>
												</Grid>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													{t("home:rooms")}
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card>
										<CardContent>
											<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<BathroomIcon fontSize="large"></BathroomIcon>
												</Grid>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													{t("home:bath")}
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card>
										<CardContent>
											<Grid container columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<AcUnitIcon fontSize="large"></AcUnitIcon>
												</Grid>
												<Grid
													item
													display={"flex"}
													xs={12}
													alignItems={"center"}
													justifyContent={"center"}
												>
													{t("home:ac")}
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</CardContent>

					<CardMedia
						sx={{ width: { xs: "100%", md: "200%", lg: "300%" } }}
						component={"img"}
						src="https://live.staticflickr.com/65535/53048539312_bef6e0c587_h.jpg"
					></CardMedia>
				</Card>
			</Container>
		</>
	)
}
export default Home
