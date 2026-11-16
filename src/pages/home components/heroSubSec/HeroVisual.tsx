import { Box, Paper, Typography, Stack } from "@mui/material";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import TerminalIcon from '@mui/icons-material/Terminal';

function HeroVisual() {

    const keyword = "#81AAFF";
    const variable = "#4CD7F6";
    const string = "#62EBA0";


    return (

        <Box
            sx={{
                width: '100%',
                maxWidth: '520px',
                position: 'relative',
                mx: 'auto'
            }}
        >

            {/* Code Editor Window */}
            <Paper
                elevation= {0}
                sx={{
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '14px',
                    bgcolor: '#303033',
                    border: '1px solid #1B1B1D',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'
                }}
            >

                {/* Editor Header */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr 1fr',
                        alignItems: 'center',
                        px: 2.5,
                        py: 1.8,
                        bgcolor: '#1B1B1D',
                        boxShadow: '1px solid #393A40'
                    }}
                >
                    {/* Window Controls */}
                    <Stack direction= 'row' spacing={1}>
                        {[ '#9B1B1B', '#929094', '#4CD7F6'].map((color) => (
                            <Box
                                key={color}
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    bgcolor: color
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Filename */}
                    <Typography
                        sx={{
                            color: '#78767A',
                            fontSize: '13px',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 500,
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        DeveloperProfile.tsx
                    </Typography>

                    {/* Terminal Icon */}
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'flex-end' 
                        }}
                    >
                        <TerminalIcon sx={{ color: '#5F5E61', fontSize: '18px' }} />
                    </Box>
                </Box>

                {/* Code Editor Body */}
                <Box
                    sx={{
                        px: 2.5,
                        py: 2,
                        minHeight: '420px',
                        bgcolor: '#303033'
                    }}
                >
                    {/* First Comment */}
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',
                            mb: 0.5
                        }}
                    >
                        <Box component= 'span' sx={{ color: '#A6B1C5'}}>
                            // Core Engineering Declaration
                        </Box>
                    </Typography>

                    {/* Intercface Declaration */}
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',
                        }}
                    >
                        <Box component= 'span' sx={{ color: keyword }}>
                            interface
                        </Box>{" "}

                        <Box component= 'span' sx={{ color: variable }}>
                            Engineer
                        </Box>{" "}
                        {"{"}
                    </Typography>

                    {/* Interface Properties */}
                    <Box sx={{ pl: 2.5 }}>
                        <Typography
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            name:{" "}

                            <Box component= 'span' sx={{ color: string }}>
                                'Christopher John Let'
                            </Box>
                            ;
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            discipline:{" "}

                            <Box component= 'span' sx={{ color: string }}>
                                'Computer Engineering'
                            </Box>
                            ;
                        </Typography>
                            
                        <Typography
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            focus:{" "}

                            <Box component= 'span' sx={{ color: string }}>
                                'Front-End UI & Web Systems'
                            </Box>
                            ;
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            stack:{" "}

                            <Box component= 'span' sx={{ color: keyword }}>
                                string[]
                            </Box>
                            ;
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            isAvailable:{" "}

                            <Box component= 'span' sx={{ color: keyword }}>
                                true
                            </Box>
                            ;
                        </Typography>   
                    </Box>

                    {/* Closing Interface */}
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',
                        }}
                    >
                        {"}"}
                    </Typography>

                    {/* Second Comment */}
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',   
                            mt: 1.5,
                            mb: 0.5 
                        }}
                    >
                        <Box component= 'span' sx={{ color: '#A6B1C5' }}>
                            // Immutable Mission Statement
                        </Box>
                    </Typography>

                    {/* Candidate Declaration */}
                    <Typography 
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',
                        }}
                    >
                        <Box component="span" sx={{ color: keyword }}>
                            const
                        </Box>{" "}
                        candidate:{" "}
                        <Box component="span" sx={{ color: variable }}>
                            Engineer
                        </Box>{" "}
                        = {"{"}
                    </Typography>

                    {/* Candidate Properties */}
                    <Box sx={{ pl: 2.5 }}>

                        <Typography 
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            name:{" "}
                            <Box component="span" sx={{ color: string }}>
                                'Christopher'
                            </Box>
                            ,
                        </Typography>

                        <Typography 
                            sx={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                lineHeight: 2.3,
                                color: '#929094',
                            }}
                        >
                            readyToShip:{" "}
                            <Box component="span" sx={{ color: keyword }}>
                                () =&gt; Promise
                            </Box>
                            .resolve(
                            <Box component="span" sx={{ color: string }}>
                                'Production Ready'
                            </Box>
                            )
                        </Typography>
                    </Box>

                    {/* Closing Object */}
                    <Typography 
                        sx={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            lineHeight: 2.3,
                            color: '#929094',
                        }}
                    >
                        {"};"}
                    </Typography>
                </Box>

                {/* Editor Footer */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        px: 2.5,
                        py: 1.5,
                        bgcolor: "#1B1B1D",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#D5D5DC",
                            fontSize: "12px",
                            fontFamily: "var(--font-mono)",
                        }}
                    >
                        UTF-8 • TSX
                    </Typography>
                </Box>
            </Paper>

             {/* Floating Technology Badge */}
            <Paper
                elevation={0}
                sx={{
                    position: "absolute",
                    bottom: -18,
                    left: -18,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.3,
                    borderRadius: "15px",
                    bgcolor: "#FFFFFF",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
                    zIndex: 2,
                }}
            >

                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "10px",
                        bgcolor: "#E2E9FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SpeedOutlinedIcon
                        sx={{
                            color: "#315DCC",
                            fontSize: 23,
                        }}
                    />
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#25252A",
                            whiteSpace: "nowrap",
                        }}
                    >
                        100% Mobile & API Ready
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#777780",
                            whiteSpace: "nowrap",
                        }}
                    >
                        React • Tailwind • TypeScript
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default HeroVisual