import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.page.background};
  overflow-y: scroll;
`;

export default Page;