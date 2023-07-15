import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from "@mui/material"
import ResponsiveAppBar from "../components/appbar"

function Home() {
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container>
				<Card
					sx={{ mt: 5, display: { xs: "grid", md: "flex" }, boxShadow: 15 }}
				>
					<CardContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
						commodo odio. Aenean maximus dui a neque maximus ultrices. Sed
						eleifend nisl eu gravida convallis. Proin sagittis eleifend
						molestie. Ut venenatis nulla et magna facilisis elementum. Morbi
						vestibulum lacus laoreet, iaculis dolor non, gravida enim. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
						scelerisque lacus, ac feugiat lectus. Nulla fermentum neque vitae
						enim elementum, quis vehicula libero varius. Etiam suscipit
						convallis gravida. Aenean vel faucibus orci. Cras non dignissim
						purus, at condimentum risus. Mauris diam tellus, iaculis a tortor
						vitae, laoreet interdum felis.
					</CardContent>
					<CardMedia
						component="img"
						src="https://random.imagecdn.app/1000/1000"
					></CardMedia>
				</Card>
				<Card
					sx={{ mt: 5, display: { xs: "grid", md: "flex" }, boxShadow: 15 }}
				>
					<CardMedia
						component="img"
						src="https://random.imagecdn.app/1000/1000"
						alt="Live from space album cover"
					></CardMedia>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<CardContent sx={{ flex: "1 0 auto" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
							commodo odio. Aenean maximus dui a neque maximus ultrices. Sed
							eleifend nisl eu gravida convallis. Proin sagittis eleifend
							molestie. Ut venenatis nulla et magna facilisis elementum. Morbi
							vestibulum lacus laoreet, iaculis dolor non, gravida enim. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
							scelerisque lacus, ac feugiat lectus. Nulla fermentum neque vitae
							enim elementum, quis vehicula libero varius. Etiam suscipit
							convallis gravida. Aenean vel faucibus orci. Cras non dignissim
							purus, at condimentum risus. Mauris diam tellus, iaculis a tortor
							vitae, laoreet interdum felis.
						</CardContent>
					</Box>
				</Card>
			</Container>
		</>
	)
}
export default Home
