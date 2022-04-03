import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'


const Calender = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null)

  return (
    
    <div className="B">

      <div className="C" id="in">
        <div className='naviCheckin'>체크인</div>
        <DatePicker
          className='datepicker1'
          id='dp'
          selected={startDate}
          minDate={new Date()}
          maxDate={endDate}
          startDate={startDate}
          endDate={endDate}
          dateFormat="M월 d일"
          onChange={(date) => { setStartDate(date); }}
          selectsStart
          isClearable={true}
          placeholderText="날짜 선택"
        />
      </div>

        <div className="naviLine" />

      <div className="C" id="out">
        <div className='naviCheckout'>체크아웃</div>
        <div className="naviDate">
        <DatePicker
          className='datepicker2'
          id='dp'
          selected={endDate}
          minDate={startDate}
          startDate={startDate}
          endDate={endDate}
          dateFormat="M월 d일"
          onChange={(date) => { setEndDate(date); }}
          selectsEnd
          isClearable={true}
          placeholderText="날짜 선택"
        />
        </div>
      </div>
 
    </div>

  )

}
export default Calender