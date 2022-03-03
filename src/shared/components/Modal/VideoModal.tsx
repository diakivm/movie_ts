import React from 'react';
import {Modal} from 'react-bootstrap'
import {FC} from "react";

interface videoModal {
    show: boolean,
    onHide(): void
}

const VideoModal: FC<videoModal> = (props) => {

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
            <Modal.Body>
              {
                  props.children
              }
            </Modal.Body>
        </Modal>
      );
}

export default VideoModal
