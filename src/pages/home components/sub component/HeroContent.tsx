import { Box, Typography, Button, Stack, Chip } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import VerifiedIcon from '@mui/icons-material/Verified'
import CodeIcon from '@mui/icons-material/Code'

function HeroContent() {

    return (
        <Box
            component='section'
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    maxWidth: '600px'
                }}
            >

                {/* Availability Badge */}
                <Chip
                    label="Open to full-time roles and select freelance projects"
                    size='small'
                    icon={
                        <Box 
                            sx={{
                                width: 9,
                                height: 9,
                                borderRadius: '50%',
                                bgcolor: '#087985'
                            }}
                        />
                    }
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        px: 1.75,
                        py: 0.75,
                        bgcolor: "#F3EFF3",
                        borderRadius: "999px",
                        width: "fit-content",
                        fontSize: 14,
                        fontFamily: 'var(--font-mono)',
                        color: "#45404A",
                        whiteSpace: "nowrap",
                        letterSpacing: "-0.05em"
                    }}
                />

            </Box>

        </Box>
    )

}

export default HeroContent

