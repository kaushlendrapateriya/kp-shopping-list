import React from "react";
import styledComponents from "styled-components";
import SubHeader from "../components/Header/SubHeader";
import FormItem from "../components/FormItem/FormItem";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const FormWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2% 5%;
`;

const SubmitButton = styledComponents(Button)`
    background: blue;
    margin: 2% 0;
`;

const Form = () => {
    let navigate = useNavigate();
    return (
        <>
            {navigate && ( 
                <SubHeader goBack={() => navigate(-1)} title={`Add Item`} />
            )}
            <FormWrapper>
                <form>
                    <FormItem id='title' label='Title' placeholder="Insert title" />
                    <FormItem 
                        id='quantity'
                        label='Quantity'
                        type="number"
                        placeholder="0"
                    />
                    <FormItem 
                        id='price'
                        label='Price'
                        type='number'
                        placeholder='0.00'
                    />
                    <SubmitButton>Add Item</SubmitButton> 
                </form>
            </FormWrapper>
        </>
    );
};

export default Form;