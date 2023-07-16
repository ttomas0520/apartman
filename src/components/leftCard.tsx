import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material"

export interface CardProp {
	text: string
	img: string
	programLocIcon: JSX.Element
}

export default function LeftCard(props: CardProp) {
	return (
		<Card sx={{ mt: 5, display: { xs: "grid", md: "flex" }, boxShadow: 15 }}>
			<CardMedia
				component="img"
				sx={{ width: { xs: "100%", md: "200%", lg: "300%" } }}
				src={props.img}
			></CardMedia>
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
						{props.text}
					</Typography>
					<br></br>
					{props.programLocIcon ? props.programLocIcon : <></>}
				</Box>
			</CardContent>
		</Card>
	)
}
