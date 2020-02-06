import { useDispatch, useSelector } from 'react-redux'

import { openResumeModal, closeResumeModal } from '../store/modules/uiControl/actions'

const useUiControl = () => {
  const dispatch = useDispatch()

  const resumeContent = useSelector(state => state.uiControl.resumeModal)
  const dispatchOpenResume = (history) => dispatch(openResumeModal(history))
  const dispatchCloseResume = () => dispatch(closeResumeModal())

  return {
    resumeContent,
    openResume: dispatchOpenResume,
    closeResume: dispatchCloseResume
  }
}

export default useUiControl
