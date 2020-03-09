import React from 'react';
import styled from 'styled-components';

const Posts = props => {
    const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 10px 30px;
    background: black;
    opacity: 0.8;
    li{
        color: white;
        list-style: none;
        font-size: 30px;
    }
    `
    console.log(props);
    
return (
    <Container>
        <ul>
            <li>{props.props.name} was born in {props.props.birth_year}</li>
        </ul>
    </Container>
)

}

export default Posts;