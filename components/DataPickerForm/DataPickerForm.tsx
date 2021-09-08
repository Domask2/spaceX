import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { Wrapper } from './DataPickerForm.style';
import 'react-datepicker/dist/react-datepicker.css';

const DataPickerForm = ({
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
}: {
  startDateSearch: any;
  endDateSearch: any;
  setStartDateSearch: any;
  setEndDateSearch: any;
  handleDataSeach: any;
}) => {
  const handleSubmit = (e: any) => {};

  return (
    <Wrapper className="picker">
      <p>можете выбрать одну дату или промежуток</p>
      <form onSubmit={handleDataSeach} className="datapicker">
        <DatePicker
          placeholderText={!endDateSearch ? 'выберите дату' : 'выберите дату ОТ'}
          selected={startDateSearch}
          onChange={(date) => setStartDateSearch(date)}
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
          selected={endDateSearch}
          onChange={(date) => setEndDateSearch(date)}
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

        <button className="btn-datapicker" type="submit">
          поиск по дате
        </button>
        <button className="btn-datapicker">очистить фильтр по дате</button>
      </form>
    </Wrapper>
  );
};

export default DataPickerForm;
