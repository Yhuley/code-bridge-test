import { FC } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Loading.styles.sass";

interface LoadingProps {
    containerHeight: any;
}

const Loading: FC<LoadingProps> = ({ containerHeight }) => (
    <Box className="loading-container" sx={{height: `${containerHeight}`}}>
       <CircularProgress />
    </Box>
)

export default Loading