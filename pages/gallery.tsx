import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import { Box } from "@mui/material"
import ResponsiveAppBar from "../src/components/appbar"

const DynamicGallery = dynamic(() => import("../src/components/gallery"), {
	ssr: false,
})

function HomePage() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<ResponsiveAppBar />
			<DynamicGallery />
		</Box>
	)
}

export default HomePage
