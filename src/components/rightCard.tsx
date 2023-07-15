import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import { CardProp } from "./leftCard";


export default function RightCard(props:CardProp){
    return(<Card
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
                        textAlign: { xs: "justify", lg: "center" },
                    }}
                >
                    {props.text}
                </Typography>
            </Box>
        </CardContent>
        <CardMedia
            component="img"
            sx={{ width: { xs: "100%", md: "200%", lg: "300%" } }}
            image={props.img.src}
        ></CardMedia>
    </Card>)
}