import React, {useEffect, useLayoutEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

import CustomPaginationActionTable from './components/Table/Table'
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Pagination,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material'
import {LoadingButton} from '@mui/lab'

import './App.css'

function App() {
  const faikData = [
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'CarModel': 'Ford Transit',
      'ChildSeat': true,
      'DepartureCity': 'Warsawa',
      'DestinationCity': 'Krakow',
      'DayOfWeeks': [
        0
      ],
      'NumberOfSeats': 2,
      'PhoneNumber': '+77777777777',
      'RegistrationPlates': 'AB 856',
      'Description': 'lorem',
      'AvailableFrom': 'Warsawa',
      'AvailableTo': 'Krakow',
      'CreatedAt': '2022-03-25T08:32:26.600Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'CarModel': 'Ford Transit',
      'ChildSeat': true,
      'DepartureCity': 'Warsawa',
      'DestinationCity': 'Krakow',
      'DayOfWeeks': [
        0
      ],
      'NumberOfSeats': 2,
      'PhoneNumber': '+77777777777',
      'RegistrationPlates': 'AB 856',
      'Description': 'lorem',
      'AvailableFrom': 'Warsawa',
      'AvailableTo': 'Krakow',
      'CreatedAt': '2022-03-25T08:32:26.600Z'
    },
    {
      'FirstName': 'Ivan',
      'LastName': 'Ivanov',
      'CarModel': 'Ford Transit',
      'ChildSeat': true,
      'DepartureCity': 'Warsawa',
      'DestinationCity': 'Krakow',
      'DayOfWeeks': [
        0
      ],
      'NumberOfSeats': 2,
      'PhoneNumber': '+77777777777',
      'RegistrationPlates': 'AB 856',
      'Description': 'lorem',
      'AvailableFrom': 'Warsawa',
      'AvailableTo': 'Krakow',
      'CreatedAt': '2022-03-25T08:32:26.600Z'
    }
  ]

  const [isLoadingData, setIsLoadingData] = useState(false)
  const [citesList, setCitesList] = useState([])
  const [applicationList, setApplicationList] = useState([])
  const [departureCity, setDepartureCity] = useState('')
  const [destinationCity, setDestinationCity] = useState('')
  const [numberOfSeats, setNumberOfSeats] = useState(0)
  const [isChildSeat, setIsChildSeat] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  const url = ''

  useEffect(() => {
    fetchCites(url)
  }, [])

  function createParams(page = 1) {
    return {
      DepartureCity: departureCity,
      DestinationCity: destinationCity,
      NumberOfSeats: numberOfSeats,
      ChildSeat: isChildSeat,
      PageNumber: page,
      PageSize: 20
    }
  }

  function fetchCites(url) {
    axios.get(url, {
      method: 'GET'
    }).then(response => {
      try {
        setCitesList(response.data)
      } catch (error) {
        console.log(error)
      }
    })
  }

  function fetchApplicationList(url, page = 1) {
    setIsLoadingData(true)
    axios.get(url, {
      method: 'GET',
      params: createParams(page)
    }).then(response => {
      try {
        setApplicationList(response.data.Data)
        setTotalPages(response.data.TotalPages)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingData(false)
      }
    })
  }

  function changePage(_, page) {
    fetchApplicationList(url, page)
  }

  function onSubmitForm(event) {
    event.preventDefault()
    fetchApplicationList(url)
  }

  return (
    <div className="App">
      <div className="app-content">
        <header className="header">
          <h1>Поиск транспорта в Польше</h1>
        </header>
        <form className="search-form" onSubmit={onSubmitForm}>
          <div className="wrapper">
            <div className="search-form__input__wrapper">
              <FormControl required sx={{mt: 2, width: 420}}>
                <InputLabel id="demo-simple-select-required-label">Откуда</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Откуда *"
                  onChange={(event) => setDepartureCity(event.target.value)}
                  value={departureCity}
                >
                  {citesList.map(city => {
                    return (
                      <MenuItem value={city.name} key={city.id}>{city.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl required sx={{mt: 2, width: 420}}>
                <InputLabel id="demo-simple-select-required-label">Куда</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Куда *"
                  onChange={(event) => setDestinationCity(event.target.value)}
                  value={destinationCity}
                >
                  {citesList.map(city => {
                    return (
                      <MenuItem value={city.name} key={city.id}>{city.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
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
                  step: 300
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
                onChange={(event) => setNumberOfSeats(+event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox checked={isChildSeat} onChange={() => setIsChildSeat(!isChildSeat)}/>}
                label="Нужно детское кресло"/>
            </div>
            <Grid container justifyContent="center">
              <LoadingButton
                type="submit"
                size="large"
                loading={isLoadingData}
                variant="outlined"
              >
                Показать варианты
              </LoadingButton>
            </Grid>
          </div>
        </form>

        <CustomPaginationActionTable sortedApplicationList={applicationList}/>
      </div>
      <Pagination className="pagination"
                  count={totalPages}
                  defaultPage={1}
                  siblingCount={1}
                  boundaryCount={1}
                  color="primary"
                  onChange={(event, page) => changePage(event, page)}
      />
    </div>
  )
}

export default App
