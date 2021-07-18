import styled from "styled-components";

export const Container = styled.header`
  transition: all 0.2s;
  background: ${props=>props.theme.colors.backgroundHeader};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
    &:focus-visible{
      outline: none;
    }
  }
  div{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
