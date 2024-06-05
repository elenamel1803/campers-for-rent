import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 32px;
`;

export const Input = styled.input`
  display: none;
`;

export const CheckboxCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  mix-blend-mode: multiply;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 18px 18px;
  width: 112px;
  height: 95px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--main);
  cursor: pointer;

  ${Input}:checked + & {
    border: 1px solid var(--button);
  }
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
`;
