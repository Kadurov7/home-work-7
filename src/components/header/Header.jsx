import React from 'react'
import { useState } from 'react'
import FormMovie from '../formMovie/FormMovie';
import Modal from '../modal/Modal';
import styled from "styled-components"
import Button from '../button/Button';

const Header = ({addNewMovieHandler}) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModalHandler = ()=>{
        setModalVisible((prevState)=> ! prevState);
    };
    
  return (
           <>
           {isModalVisible ? (
            <Modal onClose={toggleModalHandler}>
                <FormMovie onClose={toggleModalHandler}
                addNewMovieHandler={addNewMovieHandler}
                />
            </Modal>
           ) : null}
           <HeaderStyle>
           <HeaderText>Favorite Movies</HeaderText>
           <Button text ="ADD MOVIE" onClick={toggleModalHandler}
           />
           </HeaderStyle>
           </>
  )
}

export default Header;
const HeaderStyle = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
`;
const HeaderText = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;