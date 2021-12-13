import { FC } from "react";
import Alert from '@mui/material/Alert';
import "./Error.styles.sass";
import Modal from '@mui/material/Modal';

interface ErrorProps {
  error: string;
}
const Error: FC<ErrorProps> = ({ error }) => {

  return (
    <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="error-container"
    >
      <Alert severity="error">{error}</Alert>
    </Modal>
  );
}

export default Error