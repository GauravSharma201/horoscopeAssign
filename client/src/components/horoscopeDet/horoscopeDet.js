import React, { useEffect, useState } from "react";
import "./horoscopeDet.css";

function HoroscopeDet({ horoData }) {
  const [inRange, setInRange] = useState(false);
  function dataReader(horoData) {
    if (!(horoData && horoData.color)) {
      return 0;
    }
    let current_date = horoData.current_date; // take the current date value in between the date range...
    // ...to see the change in the current date.

    let dateRangeStr = horoData.date_range;

    let currDate = new Date(current_date);
    let year = currDate.getFullYear();

    let arr = dateRangeStr.split("-");
    let newDateStrTo = arr[0] + "," + year;
    let newDateStrFrom = arr[1] + "," + year;

    let dateTo = new Date(newDateStrTo);
    let dateFrom = new Date(newDateStrFrom);

    if (currDate >= dateTo && currDate <= dateFrom) {
      setInRange(true);
    }
  }
  useEffect(() => {
    dataReader(horoData);
  }, [horoData]);
  return (
    <>
      {horoData && horoData.color ? (
        <div className="col-9 hor-det flex flex-column justify-content-evenly align-items-center list-none text-white bg-pink-400 border-purple-800 border-3 border-round shadow-4">
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              color:
            </div>
            <div className="col-6 pl-3">{horoData.color}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              compatibility:
            </div>
            <div className="col-6 pl-3">{horoData.compatibility}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              current date:
            </div>
            <div
              className={
                inRange
                  ? "col-6 pl-3 text-purple-800 font-medium"
                  : "col-6 pl-3"
              }
            >
              {horoData.current_date}
            </div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              date range:
            </div>
            <div className="col-6 pl-3">{horoData.date_range}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              description:
            </div>
            <div className="col-6 pl-3"> {horoData.description}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              lucky number:
            </div>
            <div className="col-6 pl-3">{horoData.lucky_number}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              lucky time:
            </div>
            <div className="col-6 pl-3">{horoData.lucky_time}</div>
          </div>
          <div className="grid w-5">
            <div className="col-6 text-purple-800 text-lg font-medium text-right pr-3">
              mood:
            </div>
            <div className="col-6 pl-3">{horoData.mood}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default HoroscopeDet;
