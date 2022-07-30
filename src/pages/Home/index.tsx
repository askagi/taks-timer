import { Play } from 'phosphor-react'
import {
  CountdowContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdowButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para sua tarefa"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Tarefa 01" />
            <option value="Tarefa 02" />
            <option value="Tarefa 02" />
            <option value="Tarefa 03" />
          </datalist>

          <label htmlFor="minuteAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minuteAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdowContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdowContainer>

        <StartCountdowButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdowButton>
      </form>
    </HomeContainer>
  )
}
