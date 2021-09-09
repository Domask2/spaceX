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
  handleDataSeach: (e: any) => void;
};

const DataPickerForm: React.FC<Props> = ({
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
}) => {
  const [daysSuccess, daysUnSuccess] = useAxiosDataSuccess();

  // const [daysUnSuccess, setDaysUnSuccess] = useState<Array<Date>>([]);
  // const [daysSuccess, setDaysSuccess] = useState<Array<Date>>([]);
  // useEffect(() => {
  //   axios
  //     .post('https://api.spacexdata.com/v4/launches/query', queryDaty())
  //     .then(async (res: any) => {
  //       const data = await res.data.docs;
  //       const arrSucsess: Array<Date> = [];
  //       const arrUnSucsess: Array<Date> = [];
  //       data.map((suc: any) => {
  //         suc.success === true
  //           ? arrSucsess.push(new Date(suc.date_local))
  //           : arrUnSucsess.push(new Date(suc.date_local));
  //         setDaysSuccess(arrSucsess);
  //         setDaysUnSuccess(arrUnSucsess);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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

        <button className="btn-datapicker" type="submit">
          поиск по дате
        </button>
        <button className="btn-datapicker">очистить фильтр по дате</button>
      </form>
    </Wrapper>
  );
};

export default DataPickerForm;
