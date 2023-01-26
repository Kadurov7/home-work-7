import React from 'react'
import FormItem from '../formItem/FormItem';
import styled from 'styled-components';


const Movie = ({items,deleteClick}) => {
  return (
    <>
        <Ul>
            {items.map((elem)=>{
                return (
                    <FormItem
                      id={elem.id}
                      deleteClick={deleteClick}
                      src={elem.img}
                      alt="title"
                      key={elem.id + new Date().getMilliseconds()}
                      title={elem.title}
                      rating={elem.rating}/>
                )
            })}
        </Ul>
    </>
  )
}

export default Movie;

const Ul = styled.ul`
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
`;