import React from "react";
import styledComponents from "styled-components";
import { ItemsContext } from "../context/ItemsContextProvider";
import SubHeader from "../components/Header/SubHeader";
import FormItem from "../components/FormItem/FormItem";
import Button from "../components/Button/Button";
import { useParams, useNavigate } from "react-router-dom";

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
    let params = useParams();
    const { addItemRequest } = React.useContext(ItemsContext);
    const [title, setTitle] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleOnSubmit = e => {
        e.preventDefault();
        addItemRequest({
            title,
            quantity,
            price,
            id: Math.floor(Math.random()*100),
            listId: parseInt(params.id),
        });
        navigate(-1);
    };

    return (
        <>
            {navigate && ( 
                <SubHeader goBack={() => navigate(-1)} title={`Add Item`} />
            )}
            <FormWrapper>
                <form onSubmit={handleOnSubmit}>
                    <FormItem 
                        id='title' 
                        label='Title' 
                        placeholder="Insert title" 
                        value={title}
                        handleOnChange={setTitle}
                    />
                    <FormItem 
                        id='quantity'
                        label='Quantity'
                        type="number"
                        placeholder="0"
                        value={quantity}
                        handleOnChange={setQuantity}
                    />
                    <FormItem 
                        id='price'
                        label='Price'
                        type='number'
                        placeholder='0.00'
                        value={price}
                        handleOnChange={setPrice}
                    />
                    <SubmitButton>Add Item</SubmitButton> 
                </form>
            </FormWrapper>
        </>
    );
};

export default Form;