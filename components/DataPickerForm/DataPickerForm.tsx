import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { Wrapper } from './DataPickerForm.style';
import 'react-datepicker/dist/react-datepicker.css';

const DataPickerForm = ({setLte, setGte} : {setLte:any, setGte:any}) => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!startDate) return;

    if (endDate) {
      setGte(startDate)
      setLte(endDate)
    } else {
      setGte(startDate)
    }
  };

  return (
    <Wrapper>
      <p>можете выбрать одну дату или промежуток</p>
      <form onSubmit={handleSubmit} className="datapicker">
        <DatePicker
          placeholderText={!endDate ? 'выберите дату' : 'выберите дату ОТ'}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          highlightDates={[
            {
              'react-datepicker__day--highlighted-custom-1': [
                new Date('2021-09-03T10:30:00+12:00'),
              ],
            },
            {
              'react-datepicker__day--highlighted-custom-2': [
                new Date('2021-09-07T10:30:00+12:00'),
              ],
            },
          ]}
          isClearable={true}
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          highlightDates={[
            {
              'react-datepicker__day--highlighted-custom-1': [
                new Date('2021-09-11T10:30:00+12:00'),
              ],
            },
            {
              'react-datepicker__day--highlighted-custom-2': [
                new Date('2021-09-12T10:30:00+12:00'),
              ],
            },
          ]}
          isClearable={true}
        />

        <button type="submit">поиск по дате</button>
      </form>
    </Wrapper>
  );
};

export default DataPickerForm;
