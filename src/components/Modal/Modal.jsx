import PropTypes from "prop-types";
import  { React, Component } from 'react';
import { Overlay, ModalWindow } from "./Modal.styled"


export class Modal extends Component { 

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    <img src={this.props.imgUrl} alt="" />
                </ModalWindow>
            </Overlay>      
        )
    }
};


Modal.proptTypes = {
    onClose: PropTypes.func.isRequired,
};