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
            ? arrSucsess.push(new Date(suc.date_utc))
            : arrUnSucsess.push(new Date(suc.date_utc));
        });
        setDaysSuccess(arrSucsess);
        setDaysUnSuccess(arrUnSucsess);
      })
      .catch((err) => console.log(err));
  }, []);

  return [daysSuccess, daysUnSuccess];
};
