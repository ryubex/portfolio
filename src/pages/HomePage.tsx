import { Box } from "@mui/material"

import HeroSection from "./home components/HeroSection"
import Technologies from "./home components/Technologies"



function HomePage() {

    return (
        <Box
            component='main'
            sx={{
                minHeight: {
                    xs: "calc(100svh - 80px)",
                    md: "calc(100vh - 80px)"
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#FAF9FD'
            }}
        >

            {/* First Section/Hero Section */}
            <HeroSection />

            {/* Second Section/Technology Section */}
            <Technologies />
        </Box>
    )
}

export default HomePage