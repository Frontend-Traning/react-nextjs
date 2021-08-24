import { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export default function CustomModal({ isShow, scene, handleClose, saveTitle }) {
    const [text, setTitle] = useState(scene?.title || '')

    const changeValue = useCallback((e) => {
        setTitle(e.target.value)
    }, []);

    const saveValue = useCallback(() => {
        saveTitle({id: scene?.id, title: text})
    }, [saveTitle, scene?.id, text]);

    return (
        <>
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Scence Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Scence Title"
                                value={text}
                                onChange={changeValue}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveValue}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
