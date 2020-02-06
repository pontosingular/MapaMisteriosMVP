export const types = {
  OPEN_RESUME_MODAL: 'OPEN_RESUME_MODAL',
  CLOSE_RESUME_MODAL: 'CLOSE_RESUME_MODAL'
}

export const openResumeModal = (history) => ({
  type: types.OPEN_RESUME_MODAL,
  payload: history
})

export const closeResumeModal = () => ({
  type: types.CLOSE_RESUME_MODAL
})
