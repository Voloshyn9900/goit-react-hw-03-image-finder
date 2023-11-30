import Modal from 'react-modal';
import React, { Component } from 'react';
import {
  GalleryItem,
  Image,
  ImageModal,
  ButtonModal,
} from './GalleryItem.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  render() {
    const { id, webformatURL, largeImageURL } = this.props.image;
    const { modalIsOpen } = this.state;

    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Image src={webformatURL} alt="" />
        </GalleryItem>

        <Modal
          isOpen={this.state.isOpenModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ButtonModal onClick={this.closeModal}>close</ButtonModal>
          <ImageModal src={largeImageURL} alt="" />
        </Modal>
      </>
    );
  }
}
