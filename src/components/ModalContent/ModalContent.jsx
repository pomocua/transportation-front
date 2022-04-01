import './ModalContent.css'

const ModalContent = ({data, handleClose}) => {

  const daysWeek = {
    0: 'пн',
    1: 'вт',
    2: 'ср',
    3: 'чт',
    4: 'пт',
    5: 'сб',
    6: 'вс'
  }
  return (
    <div className="modal">
      <button className="modal__button-close" onClick={handleClose}>
        X
      </button>
      <p className="modal__date">Создано: {new Date(data.createdAt).toLocaleDateString()}</p>
      <div className="modal-content">

        <div className="modal-content__main">
          <div className="modal-content__path">
            <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="768"
                 height="768" viewBox="0 0 768 768">
              <path
                d="M384 367.5q33 0 56.25-23.25t23.25-56.25-23.25-56.25-56.25-23.25-56.25 23.25-23.25 56.25 23.25 56.25 56.25 23.25zM384 64.5q93 0 158.25 65.25t65.25 158.25q0 46.5-23.25 106.5t-56.25 112.5-65.25 98.25-54.75 72.75l-24 25.5q-9-10.5-24-27.75t-54-69-68.25-100.5-53.25-110.25-24-108q0-93 65.25-158.25t158.25-65.25z"></path>
            </svg>
            {data.departureCity.name} - {data.destinationCity.name}
          </div>
          <div className="modal-content__seats">
            <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="768"
                 height="768" viewBox="0 0 768 768">
              <path
                d="M640.5 642l-46.5 46.5-112.5-112.5h-162q-39 0-67.5-28.5t-28.5-67.5v-184.5q0-28.5 21.75-50.25t50.25-21.75h1.5q28.5 0 52.5 24l45 49.5q25.5 28.5 68.25 46.5t81.75 18v70.5q-93 0-177-70.5v118.5h111zM192 511.5q0 39 28.5 67.5t67.5 28.5h192v64.5h-192q-66 0-113.25-47.25t-47.25-113.25v-288h64.5v288zM243 172.5q-19.5-19.5-19.5-45t19.5-45 45-19.5 45 19.5 19.5 45-19.5 45-45 19.5-45-19.5z"></path>
            </svg>
            {data.numberOfSeats}
          </div>
        </div>

        <div className="modal-content__block">
          <div className="modal-content__block-left">
            <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512"
                 height="512" viewBox="0 0 512 512">
              <path
                d="M329.372 374.628l-105.372-105.373v-141.255h64v114.745l86.628 86.627zM256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 448c-106.039 0-192-85.961-192-192s85.961-192 192-192c106.039 0 192 85.961 192 192s-85.961 192-192 192z"></path>
            </svg>
            {data.availableFrom} - {data.availableTo}
          </div>
          <div className="modal-content__block-right">
            <ul className="modal-content__list">
              {data.dayOfWeeks.map(day => {
                return (
                  <li className="modal-content__list-item" key={day}>
                    {daysWeek[day]}&nbsp;
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="modal-content__block">
          <div className="modal-content__block-left">
            {data.firstName} {data.lastName}
          </div>
          {data.phoneNumber
            ? <a className="modal-content__block-right modal-content__phone" href={'tel:' + data.phoneNumber}>
              <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768"
                   viewBox="0 0 768 768">
                <path
                  d="M211.5 345q72 139.5 211.5 211.5l70.5-70.5q15-15 33-7.5 54 18 114 18 13.5 0 22.5 9t9 22.5v112.5q0 13.5-9 22.5t-22.5 9q-225 0-384.75-159.75t-159.75-384.75q0-13.5 9-22.5t22.5-9h112.5q13.5 0 22.5 9t9 22.5q0 60 18 114 6 19.5-7.5 33z"></path>
              </svg>
              {data.phoneNumber}
            </a>
            : null
          }
        </div>

        <div className="modal-content__block">
          <div className="modal-content__block-left">
            {data.carModel}
          </div>
          <div className="modal-content__block-right">
            <div className="modal-content__registration">
              {data.registrationPlates}
            </div>
          </div>
        </div>

        {data.description
          ? <div className="modal-content__description">
              Description: {data.description}
            </div>
          : null
        }

      </div>
    </div>
  )
}

export default ModalContent