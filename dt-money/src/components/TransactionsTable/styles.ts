import styled from "styled-components";
export const Container = styled.div`
  margin-top: 4rem;
  table { 
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: ${(props) => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody:not(:first-child) {
      box-shadow: 0 0 1.1rem ${(props) => props.theme.colors.shadow};
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${(props) => props.theme.colors.background};
      font-weight: 400;
      color: ${(props) => props.theme.colors.textTitle};
      border-radius: 0.25rem;
      &:first-child {
        color: ${(props) => props.theme.colors.textTitle};
      }
      &.entrada {
        color: var(--green);
      }
      &.saida {
        color: var(--red);
      }
    }
  }
`;
