import React, { forwardRef } from 'react'
import styled from 'styled-components';

const Input = forwardRef((props,ref) => {
  return (
     <InputDiv>
       <LabelInput htmlFor={props.id}>{props.labelName}</LabelInput>
       <StyledInput
        placeholder={props.placeholder || "..."}
        id={props.id}
        type={props.inputType}
        ref={ref}
          />
     </InputDiv>
  )
})

export default Input;
const InputDiv = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
`
const LabelInput = styled.label`
  font-size: 19px;
  color: black;
  padding: 10px;
`
const StyledInput = styled.input`
  width: 470px;
  height: 37px;
  border-radius: 7px;
  outline:none;
  &:focus {
  background-color: #d3d2d1;
  }
`