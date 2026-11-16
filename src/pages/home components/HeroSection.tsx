import { Box } from "@mui/material";

import HeroContent from "./heroSubSec/HeroContent";
import HeroVisual from "./heroSubSec/HeroVisual";

function HeroSection() {

    return(
        <Box
            component= 'section'
            sx={{
                width: '100%',
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: {
                    xs: 3,
                    sm: 5,
                    md: 8
                },
                py: {
                    xs: 6,
                    md: 8
                },
                bgcolor: '#FAF9FD'
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
                        xs: 7,
                        md: 6,
                        lg: 10
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