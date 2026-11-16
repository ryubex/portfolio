import { Box } from "@mui/material"

function Technologies() {
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

        </Box>
    )
}

export default Technologies