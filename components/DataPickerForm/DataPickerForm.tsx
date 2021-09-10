import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Wrapper } from './DataPickerForm.style';
import 'react-datepicker/dist/react-datepicker.css';
// import { queryDaty } from '../../Query/query';
import { useAxiosDataSuccess } from '../../Utils';

type Props = {
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  error: string;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};

const DataPickerForm: React.FC<Props> = ({
  error,
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
  resetSeactDate,
}) => {
  const [daysSuccess, daysUnSuccess] = useAxiosDataSuccess();

  return (
    <Wrapper className="picker">
      <p>Вы можете выбрать одну дату в левом окошке или указать необходимый диапозон.</p>
      {error}
      <form onSubmit={handleDataSeach} className="datapicker">
        <DatePicker
          placeholderText={!endDateSearch ? 'выберите дату' : 'выберите дату ОТ'}
          selected={startDateSearch}
          onChange={(date) => setStartDateSearch(date)}
          maxDate={new Date()}
          highlightDates={[
            {
              'react-datepicker__day--highlighted-custom-1': [...daysUnSuccess],
            },
            {
              'react-datepicker__day--highlighted-custom-2': [...daysSuccess],
            },
          ]}
          isClearable={true}
        />

        <DatePicker
          selected={endDateSearch}
          onChange={(date) => setEndDateSearch(date)}
          maxDate={new Date()}
          highlightDates={[
            {
              'react-datepicker__day--highlighted-custom-1': [...daysUnSuccess],
            },
            {
              'react-datepicker__day--highlighted-custom-2': [...daysSuccess],
            },
          ]}
          isClearable={true}
        />

        <button className="btn-datapicker" type="submit" disabled={!startDateSearch}>
          поиск по дате
        </button>
        <button className="btn-datapicker" onClick={resetSeactDate}>
          очистить фильтр по дате
        </button>
      </form>
    </Wrapper>
  );
};

export default DataPickerForm;
