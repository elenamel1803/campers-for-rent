import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 24px 0 64px;
`;

export const Input = styled.input`
  display: none;

  &:checked + div {
    border: 1px solid #e44848;
  }
`;

export const RadioCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 8px 10px;
  min-width: 100px;
  height: 95px;
  mix-blend-mode: multiply;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #101828;
  cursor: pointer;
`;
