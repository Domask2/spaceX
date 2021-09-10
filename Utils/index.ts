import axios from 'axios';
import { query, queryDaty } from '../Query/query';
import { useState, useEffect } from 'react';

export const useAxiosDataSuccess = () => {
  const [daysSuccess, setDaysSuccess] = useState<Array<Date>>([]);
  const [daysUnSuccess, setDaysUnSuccess] = useState<Array<Date>>([]);

  const arrSucsess: Array<Date> = [];
  const arrUnSucsess: Array<Date> = [];
  useEffect(() => {
    axios
      .post('https://api.spacexdata.com/v4/launches/query', queryDaty())
      .then(async (res: any) => {
        const data = await res.data.docs;
        data.map((suc: any) => {
          suc.success === true
            ? arrSucsess.push(new Date(new Date(suc.date_utc).toDateString()))
            : arrUnSucsess.push(new Date(new Date(suc.date_utc).toDateString()));
        });
        setDaysSuccess(arrSucsess);
        setDaysUnSuccess(arrUnSucsess);
      })
      .catch((err) => console.log(err));
  }, []);

  return [daysSuccess, daysUnSuccess];
};

export const toLocalDateTime = (utc: string) => {
  const date = new Date(utc).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return date;
};

export const toLocalDate = (utc: Date | any) => {
  const date = new Date(utc).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return date;
};

export const toDateFormat = (utc: any) => {
  let dd = utc.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = utc.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = utc.getFullYear();

  return dd + '-' + mm + '-' + yy;
};
