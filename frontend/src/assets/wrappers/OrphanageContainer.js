import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .orps {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 30px;
  }

  .explore {
    text-align: center;
  }

  .explore  h3{
    margin-bottom: 20px;
  }

  .explore p{
    font-size: large;
  }

  .page {
    padding: 0 40px;
  }
  @media (min-width: 1120px) {
    .orps {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
