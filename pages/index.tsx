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
import Groups2Icon from "@mui/icons-material/Groups2"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import BathroomIcon from "@mui/icons-material/Bathroom"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import ResponsiveAppBar from "../src/components/appbar"
import Image from "next/image"
import { image5 } from "../src/importhelper"

function Home() {
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
							>
								<b>Kedves Vendégeinket</b>
								<br /> szeretettel várjuk <b>Borsodnádasdon</b> a Bükk szívében
								gyönyörű környezetben, <b>vintage hangulatú</b> apartmanunkban.
								Mindazoknak, akik szeretik a természetet, szeretnek túrázni vagy
								a hegyekben kirándulni, a <b>Nádasdy Apartmanház</b> pihenési és
								szórakozási lehetőséget kínál, egy kellemesen fárasztó nap után.
								A Mátra es a Bükki Nemzeti Park veszi körül, Szilvásváradra
								pedig, csak el kell ugrani egy jó pisztrángot enni.
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
													8+1 férőhely
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
													5 hálószoba
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
													2 fürdő
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
													légkondi
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</CardContent>

					<CardMedia sx={{ width: { xs: "100%", md: "200%", lg: "300%" } }}>
						<div
							style={{
								width: "100%",
								position: "relative",
								display: "block",
								overflow: "auto",
							}}
						>
							<Image
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
								src={image5}
								alt="PlaceHolder"
								placeholder={"blurDataURL" in image5 ? "blur" : undefined}
							></Image>
						</div>
					</CardMedia>
				</Card>
			</Container>
		</>
	)
}
export default Home
