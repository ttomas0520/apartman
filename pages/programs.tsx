import { Container, Typography } from "@mui/material"
import ResponsiveAppBar from "../src/components/appbar"
import LeftCard from "../src/components/leftCard"
import RightCard from "../src/components/rightCard"
import useTranslation from "next-translate/useTranslation"
import LocPin from "../src/components/locpin"

function Programs() {
	const { t, lang } = useTranslation()
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container>
				<RightCard
					text={t("program:arloi")}
					img={"https://aquamagazin.hu/wp-content/uploads/2021/05/1333416.jpg"}
					programLocIcon={
						<LocPin
							locUrl={
								"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.570909524271!2d20.266707327713277!3d48.16257941690169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47407efd1ec6c717%3A0xca5eb84b9dd437c7!2zQXJsw7NpLXTDsw!5e0!3m2!1shu!2shu!4v1689512336506!5m2!1shu!2shu"
							}
						></LocPin>
					}
				></RightCard>
				<LeftCard
					text={t("program:belapat")}
					img={
						"https://s3.eu-west-3.amazonaws.com/images.trekhunt.com/2022/03/bel-ko.webp"
					}
					programLocIcon={
						<LocPin
							locUrl={
								"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42684.18296113078!2d20.293681248632797!3d48.0376342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474086095b8d26c5%3A0xc8811ff8b51bce37!2sVasb%C3%A1nya-oldal!5e0!3m2!1shu!2shu!4v1689515382573!5m2!1shu!2shu"
							}
						></LocPin>
					}
				></LeftCard>
				<RightCard
					text={t("program:szilvasvarad")}
					img={
						"https://funzine.hu/wp-content/uploads/2022/05/Szalajka-volgy-Foto-Petro-Robert-Migo-11-scaled.jpg"
					}
					programLocIcon={
						<LocPin locUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21346.08221501324!2d20.383716124592134!3d48.02799956973508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408592bbf13e8f%3A0x871cc34ac96a2463!2sSzalajka-v%C3%B6lgy!5e0!3m2!1shu!2shu!4v1689515801341!5m2!1shu!2shu"></LocPin>
					}
				></RightCard>
				<LeftCard
					text={t("program:egri")}
					img={
						"https://kirandulastippek.hu/images/news/article/zoom/p235-20.jpg"
					}
					programLocIcon={
						<LocPin locUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.671057672665!2d20.374771188824894!3d47.90405169700818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d97bb903723%3A0x8ebfa8945d085748!2zRWdyaSBWw6Fy!5e0!3m2!1shu!2shu!4v1689515857418!5m2!1shu!2shu"></LocPin>
					}
				></LeftCard>
			</Container>
		</>
	)
}
export default Programs
