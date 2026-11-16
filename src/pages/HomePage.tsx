import { Box } from "@mui/material"

import HeroSection from "./home components/HeroSection"



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
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            {/* First Section/Hero Section */}
            <HeroSection />

        </Box>
    )
}

export default HomePage