import styled from 'styled-components';

export const Wrapper = styled.div`
  .datapicker {
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 40rem) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .btn-datapicker {
      width: 100%;
    }
  }
`;
