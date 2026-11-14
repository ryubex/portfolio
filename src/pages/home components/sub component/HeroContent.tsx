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

                {/* Course */}
                <Typography
                    sx={{
                        color: '#3B82F6',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        mb: 1
                    }}
                >
                    COMPUTER ENGINEERING GRADUATE
                </Typography>

                {/* Main Heading */}
                <Typography
                    component= 'h1'
                    sx={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: {
                            xs: '40px',
                            sm: '48px',
                            md: '54px'
                        },
                        fontWeight: 750,
                        lineHeight: 1.05,
                        letterSpacing: '-2px',
                        color: '#1B1B1E',
                        mb: 1
                    }}
                >
                    Front-End Developer
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        fontFamily: 'var(--font-body)',
                        fontSize: {
                            xs: '19px',
                            md: '23px'
                        },
                        lineHeight: 1.3,
                        color: '#47464A',
                        mb: 2
                    }}
                >
                    Crafting responsive, resilient & user-friendly web experiences.
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        lineHeight: 1.75,
                        color: '#47464A',
                        maxWidth: '580px',
                        mb: 2.5
                    }}
                >
                    Passionate about transforming architectural design and
                    technical precision into clean, responsive, and functional
                    interfaces powered by modern component systems and web
                    standards.
                </Typography>

                {/* Action Buttons */}
                <Stack
                    direction= "row"
                    spacing= {1.2}
                    flexWrap= "wrap"
                    useFlexGap
                >
                    <Button
                        variant= "contained"
                        endIcon= {<ArrowForwardIcon />}
                        sx={{
                            bgcolor: '#303033',
                            color: 'FFFFFF',
                            px: 2.5,
                            py: 1.3,
                            borderRadius: '12px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '12px',
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                                bgcolor: '#44444A',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        View My Projects
                    </Button>

                    <Button
                        variant= "contained"
                        startIcon={<MailOutlineIcon />}
                        sx={{
                            bgcolor: '#FFFFFF',
                            color: '#1B1B1E',
                            px: 2.5,
                            py: 1.3,
                            borderRadius: '12px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            '&:hover': {
                                bgcolor: '#F2F2F5',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
                            },
                        }}
                    >
                        Get In Touch
                    </Button>
                </Stack>

                {/* Credentials */}
                <Stack
                    direction= 'row'
                    alignItems= 'center'
                    spacing= {2}
                    flexWrap= 'wrap'
                    useFlexGap
                    sx={{ mt: 3.5 }}
                >

                    <Stack direction= 'row' alignItems= 'center' spacing= {0.8}>

                        <VerifiedIcon
                            sx={{ fontSize: 16, color: '#008399' }}
                        />

                        <Typography fontSize= '12px' color= '#47464A'>
                            B.S Computer Engineering
                        </Typography>
                    </Stack>

                    <Box 
                        sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            bgcolor: '#ACAAAE'
                        }}
                    />

                    <Stack direction= 'row' alignItems= 'center' spacing={0.8}>
                        <CodeIcon 
                            sx={{ fontSize: 16, color: '#008399' }}
                        />

                        <Typography fontSize= '12px' color= '#47464'>
                            Full Component Lifecycle
                        </Typography>
                    </Stack>

                </Stack>

            </Box>

        </Box>
    )

}

export default HeroContent

