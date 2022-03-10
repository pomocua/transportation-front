import './App.css'
import React from 'react'
import CustomPaginationActionTable from './components/Table/Table'
import {useEffect, useState} from 'react'
import {Backdrop, Button, Checkbox, CircularProgress, FormControlLabel, Grid, TextField} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import {DatePicker, LoadingButton} from '@mui/lab'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [applicationList, setApplicationList] = useState([])

  const [dateValue, setDateValue] = React.useState(null)

  const fetchApplicationsList = [
    {
      'id': 'b2cce6e4-413b-406a-901a-5ca9c2ce950b',
      'fullName': 'Iwan Iwanowich Iwanow',
      'dateOfBirth': '1980-01-01',
      'gender': 'men',
      'languages': [
        'Украинский',
        'Английский',
        'Польский',
        'Русский'
      ],
      'citizenship': 'Ukraine',
      'phoneNumber': '+48000000001',
      'numberOfAdults': 2,
      'numberOfChildren': 3,
      'animals': true,
      'currentLocation': 'Przemysl',
      'destinationLocation': 'Warsaw',
      'needs': [
        'Помощь с транспортом'
      ],
      'description': 'lorem ipsum',
      'createdAt': '2022-02-01T14:00:00Z',
      'updatedAt': '2022-03-06T10:07:32.168114Z'
    },
    {
      'id': 'b2cce6e4-413b-406a-901a-5ca9c2ce950b',
      'fullName': 'Iwan Iwanowich Iwanow',
      'dateOfBirth': '1980-01-01',
      'gender': 'men',
      'languages': [
        'Украинский',
        'Английский',
        'Польский',
        'Русский'
      ],
      'citizenship': 'Ukraine',
      'phoneNumber': '+48000000001',
      'numberOfAdults': 2,
      'numberOfChildren': 0,
      'animals': true,
      'currentLocation': 'Przemysl',
      'destinationLocation': 'Warsaw',
      'needs': [
        ''
      ],
      'description': 'lorem ipsum',
      'createdAt': '2022-03-06T14:00:00Z',
      'updatedAt': '2022-03-06T10:07:32.168114Z'
    },
    {
      'id': 'b2cce6e4-413b-406a-901a-5ca9c2ce950b',
      'fullName': 'Petr Petrovich Petrov',
      'dateOfBirth': '1980-01-01',
      'gender': 'men',
      'languages': [
        'Украинский',
        'Английский',
        'Польский',
        'Русский'
      ],
      'citizenship': 'Ukraine',
      'phoneNumber': '+48000000001',
      'numberOfAdults': 2,
      'numberOfChildren': 1,
      'animals': true,
      'currentLocation': 'Przemysl',
      'destinationLocation': 'Warsaw',
      'needs': [
        'Помощь с размещением'
      ],
      'description': 'lorem ipsum',
      'createdAt': '2022-02-01T14:00:00Z',
      'updatedAt': '2022-03-06T10:07:32.168114Z'
    },
    {
      'id': 'b2cce6e4-413b-406a-901a-5ca9c2ce950b',
      'fullName': 'Sidor Sidorovich Sidorov',
      'dateOfBirth': '1980-01-01',
      'gender': 'men',
      'languages': [
        'Украинский',
        'Английский',
        'Польский',
        'Русский'
      ],
      'citizenship': 'Ukraine',
      'phoneNumber': '+48000000001',
      'numberOfAdults': 1,
      'numberOfChildren': 1,
      'animals': true,
      'currentLocation': 'Przemysl',
      'destinationLocation': 'Warsaw',
      'needs': [
        'Помощь с транспортом', 'Помощь с размещением'
      ],
      'description': 'lorem ipsum',
      'createdAt': '2022-03-07T12:00:00Z',
      'updatedAt': '2022-03-06T10:07:32.168114Z'
    }
  ]

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const newApplicationsList = fetchApplicationsList.map(fetchApplication => {
        return {
          ...fetchApplication,
          transport: fetchApplication.needs.includes('Помощь с транспортом'),
          accomodation: fetchApplication.needs.includes('Помощь с размещением')
        }
      })
      setApplicationList([...newApplicationsList])
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="App">

      <header className="header">
        <h1>Поиск транспорта в Польше</h1>
      </header>
        <form className="search-form">
          <div className="wrapper">
            <div className="search-form__input__wrapper">
              <TextField
                className="search-form__input"
                id="outlined-required"
                label="Откуда"
                variant="outlined"
                margin="dense"
              />
              <TextField
                className="search-form__input"
                id="outlined-required"
                label="Куда"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="search-form__input__wrapper">
              <TextField
                id="date"
                label="Когда"
                type="date"
                defaultValue="2017-05-24"
                sx={{width: 220}}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={event => console.log(event.target.value)}

                margin="dense"
              />
              <TextField
                id="time"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
                sx={{width: 150}}
                margin="dense"
              />
              <TextField
                id="outlined-number"
                label="Количество мест"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={2}
                margin="dense"
              />
              <FormControlLabel control={<Checkbox/>} label="Нужно детское кресло"/>
            </div>
            <Grid container justifyContent="center">
              <LoadingButton
                type="submit"
                size="large"
                loading={isLoading}
                variant="outlined"
              >
                Показать варианты
              </LoadingButton>
            </Grid>

          </div>


        </form>

      <CustomPaginationActionTable sortedApplicationList={applicationList} isLoading={isLoading}/>
    </div>
  )
}

export default App
