import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import ResponsiveAppBar from "../src/components/appbar"
import LeftCard from "../src/components/leftCard"
import useTranslation from "next-translate/useTranslation"
import { image26, image44, image9 } from "../src/importhelper"
import RightCard from "../src/components/rightCard"

function AboutUs() {
	const { t, lang } = useTranslation()
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container>
				<LeftCard
					text={t("about:firstCard")}
					img={
						"https://live.staticflickr.com/65535/53049611633_a48f8760be_k.jpg"
					}
					programLocIcon={null}
				></LeftCard>
				<RightCard
					text={t("about:secondCard")}
					img={
						"https://live.staticflickr.com/65535/53049507015_9906c8217b_k.jpg"
					}
					programLocIcon={null}
				></RightCard>
				<LeftCard
					text={t("about:thirdCard")}
					img={
						"https://live.staticflickr.com/65535/53048539407_fa796d6901_k.jpg"
					}
					programLocIcon={null}
				></LeftCard>
			</Container>
		</>
	)
}

export default AboutUs
