import React, { useState } from 'react'
import Modal from '../modal/Modal';
import styled from 'styled-components';

const FormItem = ({deleteClick, id, src, alt, title, rating}) => {

    const [modal, setModal] = useState(false);

    const openModal =()=>{
        setModal((prevState)=> !prevState);   
    };
    const Delete = (event)=>{
        event.preventDefault();
        openModal();
        deleteClick(id)
    }
  return (
    <>
       {modal ? (
        <Modal onClose={openModal}>
         <H3>Are you sure wanna delete?</H3>
         <ButtonNo onClick={openModal}>No</ButtonNo>
         <ButtonYes onClick={Delete}>Yes</ButtonYes>
        </Modal>
       ) : null}
       <List>
        <ImageContainer>
            <Image src={src} alt={alt}/>
        </ImageContainer>
        <Container>
            <TitleText>{title}</TitleText>
            <Text>{rating}</Text>
            <DeleteButton onClick={openModal}>Delete</DeleteButton>
        </Container>
       </List>
    </>
    
  )
}

export default FormItem;
const ButtonNo = styled.button`
  color: blue;
  border: none;
  background-color: #c0bcbc;
  width: 80px;
  border-radius: 7px;
  height: 40px;
  margin-left: 250px;
  margin-top: 20px;
`;
const ButtonYes = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  border:none;
  color: white;
  background-color: blue;
  margin-left: 20px;
`;
const H3 = styled.h3`
  font-size: 20px;
  margin-left: 50px;
`;
const List = styled.li`
  margin: 1rem 0;
  -webkit-box-shadow: 5px -7px 65px -5px rgba(2, 3, 3, 0.74);
  -moz-box-shadow: 5px -7px 65px -5px rgba(0, 0, 0, 0.74);
  box-shadow: 5px -7px 65px -5px rgba(26, 30, 32, 0.74);
  border-radius: 10px;
  display: flex;
  height: 10rem;
`;
const ImageContainer = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
`;
const TitleText = styled.h2`
   color: #383838;
  margin-bottom: 4rem; 
`;
const Text = styled.p`
  color: white;
  width: 60px;
  text-align: center;
  display: inline;
  background: #0d98a1;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  &&:hover{
    background-color: #053f3f;
  }
`;
const DeleteButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #f67722;
  background: red;
  color: white;
  border-radius: 7px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin: 0 0.5rem;
  &&:hover{
    background-color: #a80202;
  }
`;