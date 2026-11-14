import { Box } from "@mui/material"



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

        </Box>
    )
}

export default HomePage