import Image from "next/image"
import {
	isImageFitCover,
	isImageSlide,
	useLightboxProps,
} from "yet-another-react-lightbox"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import ResponsiveAppBar from "../src/components/appbar"
import NextJsImageLight from "../src/components/nextjsimagelight"
import React from "react"
import PhotoAlbum from "react-photo-album"
import images from "../src/importhelper"
import NextJsImageAlbum from "../src/components/nextjsimagealbum"

function Gallery() {
	const [index, setIndex] = React.useState(-1)
	return (
		<>
			<ResponsiveAppBar></ResponsiveAppBar>
			<PhotoAlbum
				photos={images}
				layout="columns"
				onClick={({ index: current }) => setIndex(current)}
				renderPhoto={NextJsImageAlbum}
				defaultContainerWidth={100}
				sizes={{ size: "calc(100vw - 240px)" }}
			/>
			<Lightbox
				index={index}
				slides={images}
				open={index >= 0}
				close={() => setIndex(-1)}
				render={{ slide: NextJsImageLight }}
			/>
		</>
	)
}
export default Gallery
