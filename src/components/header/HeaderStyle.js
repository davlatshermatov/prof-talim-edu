import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background: #fff;
    padding: 1.5rem 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
    position: fixed;
    top: 0;
    z-index:100;
    width: 100%;

    .sibebarToggle {
        border: 1px solid #9B9B9B;
        width: fit-content;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        color: #9B9B9B;
    }
`;