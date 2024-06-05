import styled from 'styled-components';

export const CatalogWrap = styled.div`
  display: flex;
  gap: 64px;
  padding: 32px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Button = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 30px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--main);
  margin: 0 auto;

  &:hover {
    border: 1px solid var(--button);
  }
`;

export const MessageWrap = styled.div`
  display: flex;
  width: 888px;
  height: 688px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--button-hover);
`;
