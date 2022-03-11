import './App.css'
import React from 'react'
import CustomPaginationActionTable from './components/Table/Table'
import {useState} from 'react'
import {Checkbox, FormControlLabel, Grid, TextField, Pagination} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import axios from 'axios'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [applicationList, setApplicationList] = useState([])
  const [departureCity, setDepartureCity] = useState('')
  const [destinationCity, setDestinationCity] = useState('')
  const [numberOfSeats, setNumberOfSeats] = useState(0)
  const [isChildSeat, setIsChildSeat] = useState(false)
  const [activePage, setActivePage] = useState(1)


  const transportationOffers = [
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'DepartureCity': 'Белосток',
      'DestinationCity': 'Варшава',
      'DayOfWeeks': [
        0
      ],
      'ChildSeat': true,
      'NumberOfSeats': 3,
      'PhoneNumber': '+48000000001',
      'RegistrationPlates': 'ERA 75TM',
      'Description': 'lorem ipsum',
      'AvailableFrom': 'string',
      'AvailableTo': 'string',
      'CreatedAt': '2022-03-11T07:16:38.894Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'DepartureCity': 'Белосток',
      'DestinationCity': 'Варшава',
      'DayOfWeeks': [
        0
      ],
      'ChildSeat': true,
      'NumberOfSeats': 3,
      'PhoneNumber': '+48000000001',
      'RegistrationPlates': 'ERA 75TM',
      'Description': 'lorem ipsum',
      'AvailableFrom': 'string',
      'AvailableTo': 'string',
      'CreatedAt': '2022-03-11T07:16:38.894Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'DepartureCity': 'Белосток',
      'DestinationCity': 'Варшава',
      'DayOfWeeks': [
        0
      ],
      'ChildSeat': false,
      'NumberOfSeats': 3,
      'PhoneNumber': '+48000000001',
      'RegistrationPlates': 'ERA 75TM',
      'Description': 'lorem ipsum',
      'AvailableFrom': 'string',
      'AvailableTo': 'string',
      'CreatedAt': '2022-03-11T07:16:38.894Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'DepartureCity': 'Белосток',
      'DestinationCity': 'Варшава',
      'DayOfWeeks': [
        0
      ],
      'ChildSeat': false,
      'NumberOfSeats': 3,
      'PhoneNumber': '+48000000001',
      'RegistrationPlates': 'ERA 75TM',
      'Description': 'lorem ipsum',
      'AvailableFrom': 'string',
      'AvailableTo': 'string',
      'CreatedAt': '2022-03-11T07:16:38.894Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'DepartureCity': 'Белосток',
      'DestinationCity': 'Варшава',
      'DayOfWeeks': [
        0
      ],
      'ChildSeat': true,
      'NumberOfSeats': 3,
      'PhoneNumber': '+48000000001',
      'RegistrationPlates': 'ERA 75TM',
      'Description': 'lorem ipsum',
      'AvailableFrom': 'string',
      'AvailableTo': 'string',
      'CreatedAt': '2022-03-11T07:16:38.894Z'
    }
  ]

  function createdParams(DepartureCity, DestinationCity, NumberOfSeats, ChildSeat, Page, PageSize) {
    return {
      DepartureCity,
      DestinationCity,
      NumberOfSeats,
      ChildSeat,
      Page,
      PageSize
    }
  }

  function fetchData(url, params) {
    if (params.DepartureCity.trim() && params.DestinationCity.trim() && params.NumberOfSeats) {
      setIsLoading(true)
      console.log(params)
      setTimeout(() => {
        setApplicationList([...transportationOffers])
        setIsLoading(false)
      }, 3000)



    //   axios.get(url, {
    //     params
    //   })
    //     .then(response => setApplicationList([...response.data]))
    //     .catch(error => console.log(error))
    //     .finally(() => setIsLoading(false))
    }

  }

  function submitFormHandler(event) {
    event.preventDefault()
    const params = createdParams(departureCity, destinationCity, numberOfSeats, isChildSeat, activePage, 20)
    const url = ''
    fetchData(url, params)
  }

  function changePageHandler(event, value) {
    setApplicationList([])
    setActivePage(value)
    const params = createdParams(departureCity, destinationCity, numberOfSeats, isChildSeat, activePage, 20)
    const url = ''
    fetchData(url, params)
  }

  return (
    <div className="App">
      <div className="app-content">

        <header className="header">
          <h1>Поиск транспорта в Польше</h1>
        </header>
        <form className="search-form" onSubmit={submitFormHandler}>
          <div className="wrapper">
            <div className="search-form__input__wrapper">
              <TextField
                className="search-form__input"
                id="outlined-required"
                label="Откуда"
                variant="outlined"
                margin="dense"
                value={departureCity}
                onChange={event => setDepartureCity(event.target.value)}
              />
              <TextField
                className="search-form__input"
                id="outlined-required"
                label="Куда"
                variant="outlined"
                margin="dense"
                value={destinationCity}
                onChange={event => setDestinationCity(event.target.value)}
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
                margin="dense"
                value={numberOfSeats}
                onChange={event => setNumberOfSeats(+event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox checked={isChildSeat} onChange={() => setIsChildSeat(!isChildSeat)}/>}
                label="Нужно детское кресло"/>
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
      <Pagination className="pagination"
                  onChange={changePageHandler}
                  // count={Math.ceil(applicationList.length / 20)}
                  count={5}
                  defaultPage={1}
                  siblingCount={1}
                  boundaryCount={1}
                  color="primary"
      />
    </div>
  )
}

export default App
