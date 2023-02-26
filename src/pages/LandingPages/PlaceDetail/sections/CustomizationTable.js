import React from "react"
import MUIDataTable from "mui-datatables";
import './table.css';
import { Box, Card, Chip, Paper } from "@mui/material";
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: false,
      sort: false,
    }
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    }
  },
];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
  filterType: 'checkbox',
};

function CustomizationTable(props) {
  const weekdayData = props.data;
  const markingIndex = markingTable(weekdayData)
  const showTime = showOpenTime(props.open)

  return (

    <>

      {weekdayData.length > 0 ? <>
        <table>
          <thead>
            <tr>
              <th align="center">Days</th>
              <th align="center">Time</th>

            </tr>
          </thead>
          <tbody>
            {weekdayData.map((item, idx) => {

              return (

                <tr >
                  <td style={{ color: idx == markingIndex ? 'green' : '', fontWeight: idx == markingIndex ? 'bold' : '' }} data-column="day">{item.day}</td>
                  <td style={{ color: idx == markingIndex ? 'green' : '', fontWeight: idx == markingIndex ? 'bold' : "" }} data-column="time">{item.time}</td>

                </tr>
              )
            })}
            <tr>

              <td colspan="2">สถานะการให้บริการ: {
                <Chip
                  sx={{ fontSize: 12, fontWeight: 'bold', color: '#F0FFFF', height: '30px' }}
                  size="sm"
                  variant=""
                  color={showTime.opening === 'เปิดอยู่' ? "success" : "error"}
                  readOnly

                  label={showTime.opening}
                />}</td>
            </tr>



          </tbody>
        </table>
      </> : <></>}
    </>






  )
}
const markingTable = (weekdayData) => {
  var i = new Date().getUTCDay();
  var daysMaster = [
    "วันอาทิตย์",
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์"
  ];
  const index = weekdayData.findIndex(item => daysMaster[i] === item.day.split(":")[0]);
  return index;
}
const showOpenTime = (timedata) => {
  console.log(timedata);
  if (timedata) {
    return {
      opening: "เปิดอยู่",
      color_status: "#21bf73"
    }

  } else {
    return {
      opening: "ปิดทำการ",
      color_status: "#fd5e53"
    }

  }
}
export default CustomizationTable;