import LocationOnIcon from "@mui/icons-material/LocationOn"
import Link from "next/link"
interface LocProps {
	locUrl: string
}
export default function LocPin(props: LocProps) {
	return (
		<div
			style={{
				overflow: "hidden",
				paddingBottom: "56.25%",
				position: "relative",
				height: "0",
			}}
		>
			<iframe
				src={props.locUrl}
				width="100%"
				height="100%"
				style={{ border: 0, left: 0, right: 0, position: "absolute" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	)
}
