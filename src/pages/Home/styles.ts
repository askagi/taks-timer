import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.8rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  height: 4rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0 0.8rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
`

export const CountdowContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 3.2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountdowButton = styled.button`
  width: 100%;
  border: none;
  padding: 1.6rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-weight: 700;
  line-height: 2.9rem;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
