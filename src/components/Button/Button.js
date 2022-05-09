import styledComponents from "styled-components";

const Button = styledComponents.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: orange;
    color: white;
    padding: 10px;
    line-height: 2;
    border-radius: 5px;
    border: 0;
    font-size: inherit;
    cursor: pointer;
`;

export default Button;