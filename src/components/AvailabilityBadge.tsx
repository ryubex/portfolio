
import { Box, Typography } from "@mui/material";

const IS_AVAILABLE = true;

const AvailabilityBadge = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.75,
        py: 0.75,
        bgcolor: "#F0EDF1",
        borderRadius: "999px",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          bgcolor: IS_AVAILABLE ? "#087985" : "#9E9E9E",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: 14,
          fontFamily: 'var(--font-mono)',
          color: "#45404A",
          whiteSpace: "nowrap",
          letterSpacing: "-0.05em"
        }}
      >
        {IS_AVAILABLE ? "Available for work" : "Not available"}
      </Typography>
    </Box>
  );
};

export default AvailabilityBadge;
