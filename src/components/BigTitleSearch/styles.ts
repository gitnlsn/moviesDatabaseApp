import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
`;

export const Input = styled.input`
    all: unset;
    width: 100%;

    padding-bottom: 8px;
    border-bottom: 1px solid;
    text-align: right;
    font-size: 80px;

    ::placeholder {
        color: black;
        opacity: 1;
    }

    :hover {
        border-bottom: 3px solid;
    }

    :focus {
        border-bottom: 3px solid;
    }
`;
