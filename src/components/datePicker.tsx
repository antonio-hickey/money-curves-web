import {useState, Dispatch, SetStateAction} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import { CurveData } from './../types.ts';


type DatePickerProps = {
  setData: Dispatch<SetStateAction<CurveData | undefined>>
}

export default function DatePicker(props: DatePickerProps) { 
  const today = new Date();
  const [value, setValue] = useState();
  
  /* Update the date picker value on change */
  function handleValueChange(newValue: any) {
    setValue(newValue); 

    // Fetch a new curve based on the date change
    fetch('https://tx5dqdiyy3.execute-api.us-east-1.amazonaws.com/dev/fetch-curve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newValue)
    })
      .then(resp => resp.json())
      .then(resp => {
        resp = resp[0];
        resp ? () => {
        let curveData = {
          labels: ['1 mo', '2 mo', '3 mo', '6 mo', '1 yr', '2 yr', '3 yr', '5 yr', '7 yr', '10 yr', '20 yr', '30 yr'],
          datasets: [
            {
              fill: true,
              label: "% Interest Rate",
              data: [
                resp.mo_1, resp.mo_2, resp.mo_3, 
                resp.mo_6, resp.yr_1, resp.yr_2,
                resp.yr_3, resp.yr_5, resp.yr_7, 
                resp.yr_10, resp.yr_20, resp.yr_30,
              ],
      borderColor: '#6ba560',
      backgroundColor: '#a7caa080',
      borderWidth: 6
            }
          ] 
        };
        props.setData(curveData);
        } : null;
      });
  } 

  return (
    <Datepicker 
      primaryColor={"green"}
      placeholder={"Select a date..."}
      value={value ? value : null} 
      onChange={handleValueChange} 
      asSingle={true}
      useRange={false}
      maxDate={today}
      displayFormat={"MM/DD/YYYY"}
      inputClassName={
        "relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 bg-background-light text-black rounded-lg tracking-wide text-sm placeholder-gray-400"
      }
    /> 
  )
}; 
