import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import Row from './Row/Row'

const CustomPaginationActionTable = ({applicationList}) => {

  const columns = [
    {id: 'from', label: 'Откуда',minWidth: 200},
    {id: 'to', label: 'Куда',minWidth: 200},
    {id: 'needs', label: 'Количество мест',width: 170},
    { id: 'action', label: 'Наличие детского кресла',width: 170 }
  ]

  return (
    <>
      <Paper sx={{width: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{maxHeight: 440}}>
          <Table stickyHeader aria-label="customized  table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      background: '#FAFAFA'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {applicationList
                .map((row, index) => {
                  return (
                    <Row key={index} row={row}/>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default CustomPaginationActionTable