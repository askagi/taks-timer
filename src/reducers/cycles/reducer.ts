import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      /* Sem a biblioteca PRODUCE  */
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }

      /* Usando a biblioteca PRODUCE  */
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      /* 
       Sem a biblioteca PRODUCE 
       */

      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (state.activeCycleId === cycle.id) {
      //       return {
      //         ...cycle,
      //         interruptDate: new Date(),
      //       }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      /* Usando a biblioteca PRODUCE  */

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      /* 
       Sem a biblioteca PRODUCE 
       */

      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (state.activeCycleId === cycle.id) {
      //       return {
      //         ...cycle,
      //         interruptDate: new Date(),
      //       }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      /* Usando a biblioteca PRODUCE  */

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
