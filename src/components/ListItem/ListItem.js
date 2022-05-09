import React from "react";
import styledComponents from "styled-components";

const ListItemWrapper = styledComponents.div`
    display: flex;
    text-align: left;
    align-items: center;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    padding: 10%;
    margin-bottom: 2%;
    text-decoration: none;
`;

const Title = styledComponents.h3`
    flex-basis: 70%;
`;

const Total = styledComponents.span`
    flex-basis:15%;
    font-weight: bold;
    text-align: right;
`;

const ListItem = ({ data }) => (
    <ListItemWrapper>
        <Title>{data.title}</Title>
        <Total>{`Quantity: ${data.quantity}`}</Total>
        <Total>{`$ ${data.price}`}</Total>
    </ListItemWrapper>
);

export default ListItem;