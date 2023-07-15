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
				<LeftCard text={t("about:firstCard")} img={image9}></LeftCard>
				<RightCard text = {t("about:secondCard")} img={image26}></RightCard>
				<LeftCard text={t("about:thirdCard")} img={image44}></LeftCard>
			</Container>
		</>
	)
}

export default AboutUs
