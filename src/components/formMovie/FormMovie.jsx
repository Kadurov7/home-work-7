import React, { useRef } from 'react'
import Input from '../input/Input'
import styled from 'styled-components';


const FormMovie = ({onClose,addNewMovieHandler}) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const ratingInputRef = useRef();

    const saveHandler = (event)=>{
    event.preventDefault();

    const moviesObj = {
        title:titleInputRef.current.value,
        img: imageInputRef.current.value,
        rating:ratingInputRef.current.value,
        }
        addNewMovieHandler(moviesObj)
        onClose();
    };
  return (
    <form>
        <Input
             id="name"
             labelName="Movie Title"
             inputType="text"
             placeholder="..."
             ref={titleInputRef}
        />
        <Input
             id="link"
             labelName="Image URL"
             inputType="text"
             placeholder="..."
             ref={imageInputRef}
        />
        <Input
             id="rating"
             labelName="Your Rating"
             inputType="number"
             placeholder="..."
             ref={ratingInputRef}
        />
          <ButtonDiv>
            <CancelBtn onClick={onClose}>Cancel</CancelBtn>
            <AddBtn onClick={saveHandler}>Add</AddBtn>
          </ButtonDiv>
    </form>
  );
}

export default FormMovie;

const CancelBtn = styled.button`
 width: 100px;
 background-color: grey;
 height: 35px;
 border: none;
 color: white;
 border-radius: 8px;
 &&:hover{
  background-color: #494848;
 }
`;
const AddBtn = styled.button`
 width: 100px;
 background-color: blue;
 height: 35px;
 color: white;
 border: none;
 border-radius: 8px;
 &&:hover{
  background-color: #080885;
 }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  gap: 2rem;
  margin-right: 1.8rem;
`