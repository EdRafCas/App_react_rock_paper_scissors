import styled from "styled-components";

const Contenedor = styled.div`
    width: 90%;
    max-width: 70rem; /*1110px*/
    height: 90vh;
    max-height: 50rem;  /* 800px */
    min-height: 667px;
    overflow:hidden;
    /* border: 1px solid #fff; */
    /* box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05); */
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    
    z-index: 100;
 

    @media(max-width: 500px){ /* 950px */
        width:375px;
        width: 100%;
        justify-content: space-between;
        margin:0;
        max-height: auto;
    }

`;

export default Contenedor;