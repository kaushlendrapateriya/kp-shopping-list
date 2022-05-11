import React from 'react';
import styledComponents from 'styled-components';

const FormItemWrapper = styledComponents.div`
    display: flex;
    text-alignt: left;
    flex-direction: column;
    margin-bottom: 2%;
`;

const Label = styledComponents.label`
    display: block;
    font-weight: bold;
    padding: 10px 0;
`;

const Input = styledComponents.input`
    flex-basis: 60%;
    font-size: inherit;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid lightGray;
`;

const FormItem = ({
    id,
    label,
    value,
    handleOnChange,
    type = 'text',
    placeholder = '',    
}) => (
    <FormItemWrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input 
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={e => handleOnChange(e.target.value)}
        />
    </FormItemWrapper>
);

export default FormItem;