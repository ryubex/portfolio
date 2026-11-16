import { Box } from "@mui/material";

import HeroContent from "./heroSubSec/HeroContent";
import HeroVisual from "./heroSubSec/HeroVisual";

function HeroSection() {

    return(
        <Box
            component= 'section'
            sx={{
                width: '100%',
                minHeight: {
                    xs: 'auto',
                    md: 'calc(100vh - 80px)'
                },
                display: 'flex',
                alignItems: {
                    xs: 'center',
                    md: "flex-start"
                },
                justifyContent: 'center',
                px: {
                    xs: 3,
                    sm: 5,
                    md: 8
                },
                pt: {
                    xs: 4,
                    md: 8
                },
                pb: {
                    xs: 5,
                    md: 4
                }
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1.1fr 0.9fr'
                    },
                    alignItems: 'center',
                    gap: {
                        xs: 5,
                        md: 4,
                        lg: 6
                    }
                }}
            >

                {/* Left Side */}
                <HeroContent />

                {/* Right Content */}
                <HeroVisual />

            </Box>

        </Box>
    )

}

export default HeroSection