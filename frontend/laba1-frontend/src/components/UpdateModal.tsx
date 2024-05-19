import {Button, Modal} from 'react-bootstrap';
import useUpdateUser from "../hooks/useUpdateUser.ts";

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  id: string
}

function UpdateModal({isOpen, setOpen, id}: Props, ) {
  const {mutate} = useUpdateUser()
  const handleUpdate = () => {
    mutate(id)
    setOpen(false)
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update user with ID: ${id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you almost done it via modal! Click save changes to update user with TEST DATA</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;