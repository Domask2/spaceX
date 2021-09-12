import React from 'react';
import DatePicker from 'react-datepicker';
import { Wrapper } from './DataPickerForm.style';
import 'react-datepicker/dist/react-datepicker.css';
import { useAxiosDataSuccess } from '../../Utils';
import { PropsDataPicker } from '../../type';


const DataPickerForm: React.FC<PropsDataPicker> = ({
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
      <form onSubmit={handleDataSeach} className="datapicker">
        <DatePicker
          className="datapicker-input"
          placeholderText={!endDateSearch ? 'выберите дату' : 'выберите дату ОТ'}
          selected={startDateSearch}
          onChange={(date) => setStartDateSearch(date)}
          maxDate={new Date()}
          dateFormat="dd.MM.yyyy"
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
          className="datapicker-input"  
          selected={endDateSearch}
          onChange={(date) => setEndDateSearch(date)}
          maxDate={new Date()}
          dateFormat="dd.MM.yyyy"
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
