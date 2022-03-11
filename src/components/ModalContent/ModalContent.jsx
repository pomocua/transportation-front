// import './ModalContent.scss'

const ModalContent = ({data, handleClose}) => {

  const length = data.languages.length

  return (
    <div className="modal">
      <button className="modal__button-close" onClick={handleClose}>
        X
      </button>
      <div className="modal-content">
        <p className="modal-content__subtitle">Created: {new Date(data.createdAt).toLocaleDateString()}</p>
        <p className="modal-content__path">
          {data.DepartureCity} - {data.DestinationCity}
        </p>
        <a className='modal-content__phone' href={'tel:' + data.phoneNumber}>{data.phoneNumber}</a>
        <div className="modal-content__box">
          <div className="modal-content__box-item">
            <p className="modal-content__adults">
              Количество мест: {data.NumberOfSeats}
            </p>

            <p className="modal-content__animal">
              Детское кресло: {data.ChildSeat ? 'есть' : 'нету'}
            </p>
          </div>
          <div className="modal-content__box-item">
            <p className="modal-content__citizenship">
            </p>
            <p className="modal-content__languages">
              Languages: {data.languages.map((language, index) => (
                length === index + 1 ? <span key={index}>{language}</span> : <span key={index}>{language}, </span>
              )
            )}
            </p>
          </div>
        </div>
        <div className="modal-content__box modal-content__box_color">
          {data.transport
            ? <div className="modal-content__box-item">
              <div className="modal-content__card">
                <h3 className="modal-content__card-title">Need transport</h3>
                <p className="modal-content__card-info">
                  <span>
                    {data.currentLocation} - {data.destinationLocation}
                  </span>
                </p>
              </div>
            </div>
            : null
          }
          {data.accomodation
            ? <div className="modal-content__box-item">
              <div className="modal-content__card">
                <h3 className="modal-content__card-title">Need accomodation</h3>
                <p className="modal-content__card-info">
                  {data.destinationLocation}
                </p>
              </div>
            </div>
            : null
          }
        </div>
        {data.description
          ? <p className="modal-content__additional-information">Additional information:<br/> {data.description}</p>
          : null
        }
      </div>
    </div>
  )
}

export default ModalContent