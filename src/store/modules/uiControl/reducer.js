import { types } from './actions'

const initialState = {
  resumeModal: {
    open: false,
    content: {
      id: null,
      name: null,
      type: null,
      discoveredCount: 0,
      coverImg: null,
      available: false
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_RESUME_MODAL:
      return ({
        resumeModal: {
          open: true,
          content: {
            id: action.payload.id,
            name: action.payload.name,
            type: action.payload.type,
            discoveredCount: action.payload.discoveredCount,
            available: action.payload.available,
            coverImg: action.payload.coverImg
          }
        }
      })
    case types.CLOSE_RESUME_MODAL:
      return ({
        ...initialState
      })
  }
  return state
}

export default reducer
