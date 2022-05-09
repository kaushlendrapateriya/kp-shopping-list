import React from "react";
import styledComponents from "styled-components";
import { Link } from 'react-router-dom';
import withDataFetching from "../withDataFetching";
import SubHeader from "../components/Header/SubHeader";

const ListWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const ListLink = styledComponents(Link)`
    display: flex;
    text-align: right;
    align-items: center;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2%;
    color: black;
    text-decoration: none;
`;

const Title = styledComponents.h3`
    flex-basis: 80%;
`

const Alert = styledComponents.span`
    width: 100%;
    text-align: center;
`;

const Lists = ({ data, loading, error }) => 
    !loading && !error ? (
        <>
            <SubHeader title={'Your Lists'} />
            <ListWrapper>
                {data && 
                    data.map(list => (
                        <ListLink key={list.id} to={`/list/${list.id}`}>
                            <Title>{list.title}</Title>
                        </ListLink>
                    ))
                }
            </ListWrapper>
        </>
    ) : (
        <Alert>{loading ? 'Loading...' : error}</Alert>
    );

export default withDataFetching({
    dataSource: 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists',
})(Lists);