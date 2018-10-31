import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/action-types'
import { dispatch } from 'rxjs/internal/observable/pairs'

let nextToDoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextToDoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

// Visibility FIlters are in the contsants directore in the action-types.js file
