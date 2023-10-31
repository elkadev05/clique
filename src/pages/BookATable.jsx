import React, { useRef } from 'react';
import styles from './BookATable.module.scss'

function BookATable() {

  return (
    <div className={styles.bookingContainer}>
        <div className={styles.bookingForm}>
            <iframe 
                className={styles.reservationIframe}
                src='https://www.sevenrooms.com/direct/reservation-request/cliquebeirutvenue/table' 
                title="Reservation Form">
            </iframe>
        </div>
    </div>
  )
}

export default BookATable;
