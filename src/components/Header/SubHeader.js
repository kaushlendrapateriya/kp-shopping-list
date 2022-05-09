import React from "react";
import styledComponents from "styled-components";
import Button from "../Button/Button";

const SubHeaderWrapper = styledComponents.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: navajoWhite;
`;

const Title = styledComponents.h2`
    text-align: center;
    flex-basis: 60%;

    &:first-child {
        margin-left: 20%;
    }

    &:last-child {
        margin:right: 20%;
    }
`;

const SubHeaderButton = styledComponents(Button)`
    margin: 10px 5%;
`;

const SubHeader = ({ goBack, title, openForm = false }) => (
    <SubHeaderWrapper>
        {goBack  && (
            <SubHeaderButton onClick={goBack}>{`< Go Back`}</SubHeaderButton>
        )}
        <Title>{title}</Title>
        {openForm && (
            <SubHeaderButton onClick={openForm}>{`+ Add Item`}</SubHeaderButton>
        )}
    </SubHeaderWrapper>
);

export default SubHeader;