import React from 'react'
import {Box, styled, TableCell, TableRow} from '@mui/material'
import ModalUnstyled from '@mui/base/ModalUnstyled'
import ModalContent from '../../ModalContent/ModalContent'


const Row = ({row}) => {

  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto;
  `
  const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    -webkit-tap-highlight-color: transparent;
  `
  const style = {
    width: '100%',
    bgcolor: 'background.paper',
    p: 2,
    px: 4,
    pb: 3
  }

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} onClick={handleOpen} style={{cursor: 'pointer'}}>
        <TableCell align="left">
          {row.departureCity.name}
        </TableCell>
        <TableCell align="left">
          {row.destinationCity.name}
        </TableCell>
        <TableCell align="left">
          {row.numberOfSeats}
        </TableCell>
        <TableCell align="left">
          {row.childSeat ? 'Да' : 'Нет'}
        </TableCell>
      </TableRow>
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <ModalContent data={row} handleClose={handleClose}/>
        </Box>
      </StyledModal>
    </>
  )
}

export default Row