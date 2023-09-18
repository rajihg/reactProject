import React from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

const convertToDefEventPara = (name, value) => ({
  target: {
    name, value
  }
});

const DatePicker = ({ name, label, value, onChange }) =>

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker 
        disableToolbar 
        variant="inline" 
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefEventPara(name, date))}
        disableCloseOnSelect={false}
      />
    </MuiPickersUtilsProvider>

export default DatePicker;



