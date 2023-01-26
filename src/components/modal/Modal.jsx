import React from 'react'
import { createPortal } from "react-dom"
import styled from 'styled-components'

const Modal = ({onClose,children}) => {


  return (
    <>
    {createPortal(
        <>
        <Backdroup onClick={onClose}/>
        <Card>{children}</Card>
        </>,
        document.getElementById("backdroup")
    )}
    </>
  )
}

export default Modal;

const Backdroup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 10;   
`;
const Card = styled.div`
box-sizing: border-box;
background-color: #fff;
padding:30px;
min-width:500px;
border-radius: 20px; 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index:100;
`