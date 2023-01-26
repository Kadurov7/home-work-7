import React from 'react'
import styled from 'styled-components';

const Button = ({onClick,text}) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
 font: inherit;
    padding: 0.5rem 0.8rem;
    border: 1px solid  #f67722;
    background:  #f67722;
    color: white;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
    &&:hover{
      background-color: #f1cb4b;
    }
`