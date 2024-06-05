import styled from 'styled-components';

export const FiltersWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 14px;
`;

export const CategoryText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: var(--button);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: var(--button-hover);
  }
`;
