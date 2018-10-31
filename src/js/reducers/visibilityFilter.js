import { VisibilityFilters } from './constants/action-types'

const visibilityFilters = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET-VISIBILITY_FILTER':
      return action.filter
    default:return state
  }
}
export default visibilityFilters
