import React, {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

import CustomPaginationActionTable from './components/Table/Table'
import {Checkbox, FormControlLabel, Grid, TextField, Pagination, MenuItem, Select, InputLabel, FormControl, Backdrop, CircularProgress} from '@mui/material'
import {LoadingButton} from '@mui/lab'

import './App.css'

function App() {

  const URL = ''

  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)

  const [citesList, setCitesList] = useState([])
  const [applicationList, setApplicationList] = useState([])

  const [totalPages, setTotalPages] = useState(0)
  const [options, setOptions] = useState({
    departureCity: '',
    destinationCity: '',
    numberOfSeats: 0,
    isChildSeat: false
  })

  useEffect(() => {
    fetchCites(URL)
  }, [])

  function createParams(page = 1) {
    return {
      DepartureCity: options.departureCity,
      DestinationCity: options.destinationCity,
      NumberOfSeats: +options.numberOfSeats,
      ChildSeat: options.isChildSeat,
      PageNumber: page,
      PageSize: 20
    }
  }

  function fetchCites(url) {
    setIsLoadingCities(true)
    axios.get(url + '/api/cities', {
      method: 'GET'
    }).then(response => {
      try {
        setCitesList(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingCities(false)
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
        setApplicationList(response.data.data)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingData(false)
      }
    })
  }

  function changePage(_, page) {
    fetchApplicationList(URL, page)
  }

  function onSubmitForm(event) {
    event.preventDefault()
    fetchApplicationList(URL)
  }

  function changeOptions(event) {
    const name = event.target.name
    const value = event.target.value
    if (event.target.name === 'isChildSeat') {
      setOptions(prevState => ({...prevState, [name]: !options[name]}))
    } else {
      setOptions(prevState => ({...prevState, [name]: value}))
    }
  }

  return (
    <div className="App">

      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isLoadingCities}
      >
        <CircularProgress color="inherit"/>
      </Backdrop>

      <div className="app-content">
        <header className="header">
          <h1>?????????? ???????????????????? ?? ????????????</h1>
        </header>
        <form className="search-form" onSubmit={onSubmitForm}>
          <div className="wrapper">
            <div className="search-form__input__wrapper">
              <FormControl required sx={{mt: 2, width: 420}}>
                <InputLabel id="demo-simple-select-required-label">????????????</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="???????????? *"
                  name="departureCity"
                  onChange={changeOptions}
                  value={options.departureCity}
                >
                  {citesList.map(city => {
                    return (
                      <MenuItem value={city.name} key={city.id}>{city.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl required sx={{mt: 2, width: 420}}>
                <InputLabel id="demo-simple-select-required-label">????????</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="???????? *"
                  name="destinationCity"
                  onChange={changeOptions}
                  value={options.destinationCity}
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
                label="??????????"
                type="date"
                sx={{width: 220}}
                InputLabelProps={{
                  shrink: true
                }}
                margin="dense"
              />
              <TextField
                id="time"
                type="time"
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
                label="???????????????????? ????????"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                margin="dense"
                value={options.numberOfSeats}
                name="numberOfSeats"
                onChange={changeOptions}
              />
              <FormControlLabel
                control={<Checkbox
                  checked={options.isChildSeat}
                  name="isChildSeat"
                  onChange={changeOptions}
                />}
                label="?????????? ?????????????? ????????????"
              />
            </div>
            <Grid container justifyContent="center">
              <LoadingButton
                type="submit"
                size="large"
                loading={isLoadingData}
                variant="outlined"
              >
                ???????????????? ????????????????
              </LoadingButton>
            </Grid>
          </div>
        </form>

        <CustomPaginationActionTable applicationList={applicationList}/>
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
