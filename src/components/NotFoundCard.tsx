import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function NotFoundCard() {
    return (
        <Card
            sx={{
                position: "absolute",
                textAlign: "center",
                left: "0px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                margin: "auto",
                borderRadius: "12px",
                width: "256px",
                height: "256px",
                backgroundColor: "primary",
                "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    textAlign: "center",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <FontAwesomeIcon
                    icon={faExclamationCircle}
                    size="6x"
                />
                <Typography
                    gutterBottom
                    variant="subtitle1"
                >
                    Go Home
                </Typography>
            </Box>
        </Card>
    );
}

export { NotFoundCard };
