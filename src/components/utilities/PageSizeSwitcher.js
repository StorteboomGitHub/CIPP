import React from 'react'
import { CButtonGroup, CButton, CCard, CCardHeader } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageSize } from 'src/store/features/app'

const PageSizeSwitcher = () => {
  const dispatch = useDispatch()
  const pageSizes = useSelector((state) => state.app.pageSizes)
  const currentTablePageSize = useSelector((state) => state.app.tablePageSize)

  const SwitchPageSize = (t) => {
    dispatch(setCurrentPageSize({ pageSize: t }))
  }

  return (
    <CCard>
      <CCardHeader>Select Default Page Size</CCardHeader>
      <CButtonGroup role="group" aria-label="Page Size Switcher">
        {pageSizes.map((t, index) => (
          <CButton
            onClick={() => SwitchPageSize(t)}
            color={t === currentTablePageSize ? 'primary' : 'secondary'}
            key={index}
          >
            {t}
          </CButton>
        ))}
      </CButtonGroup>
    </CCard>
  )
}

export default PageSizeSwitcher
