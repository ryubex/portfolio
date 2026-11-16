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
                bgcolor: '#FAF9FD',

                // Blue Background Glow

                "&::before": {
                    content: '""',
                    position: 'absolute',

                    // Push the circle above the viewport
                    top: '-650px',
                    left: '50%',
                    transform: 'translateX(-50%)',

                    // Oversized circular glow
                    width: '1800px',
                    height: '1200px',
                    borderRadius: '50%',

                    background: `
                        radial-gradient(
                            circle,
                            rgba(173, 216, 255, 0.65) 0%,
                            rgba(200, 230, 255, 0.35) 45%,
                            rgba(230, 242, 255, 0.12) 70%,
                            transparent 100%
                        )
                    `,

                    filter: 'blur(55px)',
                    pointerEvents: 'none',
                    zIndex: 0
                },

                "& > *": {
                    position: 'relative',
                    zIndex: 1
                }
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