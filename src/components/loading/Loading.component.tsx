import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Loading.styles.sass";

const Loading = () => (
    <Box className="loading-container">
       <CircularProgress />
    </Box>
)

export default Loading