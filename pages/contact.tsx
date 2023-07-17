import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import ResponsiveAppBar from "../src/components/appbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Link from "next/link"
function Contact() {
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container>
				<Card>
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
								NÁDASDY APARTMAN <br></br>
								Magánszálláshely <br></br>
								Cím: 3671 Borsodnádasd Karácsonylova utca 14. <br></br>
								NTAK Regisztráció : MA23075465 <br></br>
								Adószám:53030939-1-33<br></br>
								Üzemeltető : Darcsi Irén Telefon:<br></br>
								+36309254808 E-mail: nadasdyapartman@gmail.com<br></br>
								<br></br>
								Elérhetőek vagyunk az{" "}
								<b>
									<Link
										href={
											"https://www.facebook.com/profile.php?id=100094310367475"
										}
									>
										Facebookon
									</Link>
									,{" "}
									<Link
										href={
											"https://www.airbnb.hu/rooms/928157195653794227?check_in=2023-07-23&check_out=2023-07-28&guests=1&adults=1&s=67&unique_share_id=951dd94c-eb56-4b7d-8c28-1bf79094832c"
										}
									>
										AirBnB
									</Link>
									,{" és "}
									<Link href={"https://www.booking.com/Share-wQ82Lz"}>
										Booking
									</Link>{" "}
									weblapokon is!
								</b>
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</Container>
		</>
	)
}
export default Contact
