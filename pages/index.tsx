import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import { query } from '../Query/query';

type ISpaces = {
  data_local: Date;
  data_utc: Date;
  details: string;
  id: string;
  links: Array<any>;
  name: string;
  success: boolean;
};

const Home = ({
  initialSpaces,
  initialTotalDocs,
}: {
  initialSpaces: [ISpaces] | null;
  initialTotalDocs: number;
}) => {
  const [spaces, setProducts] = useState<[ISpaces] | null | any>(initialSpaces);
  const [fetching, setFetching] = useState<boolean>(false);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [totalDocs, setTotalDocs] = useState<number>(initialTotalDocs);

  const [startDateSearch, setStartDateSearch] = useState<Date | any>(new Date('2006-01-01'));
  const [endDateSearch, setEndDateSearch] = useState<Date | any>(new Date());

  const remoteState = () => {
    setProducts(null);
    setCurrentOffset(0);
    setFetching(false);
  };

  const handleDataSeach = (e: any) => {
    e.preventDefault();
    remoteState();

    if (!startDateSearch) return;

    if (endDateSearch) {
      setStartDateSearch(startDateSearch);
      setEndDateSearch(endDateSearch);

      axios
        .post(
          'https://api.spacexdata.com/v4/launches/query',
          query(0, startDateSearch, endDateSearch),
        )
        .then(async (res: any) => {
          const data = await res.data;
          setProducts(data.docs);
          setCurrentOffset((prevState) => prevState + 6);
        })
        .catch((err) => console.log(err));
    } else {
      setStartDateSearch(startDateSearch);

      axios
        .post(
          'https://api.spacexdata.com/v4/launches/query',
          query(0, startDateSearch, startDateSearch),
        )
        .then(async (res: any) => {
          const data = await res.data;
          setProducts(data.docs);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (fetching) {
      axios
        .post(
          'https://api.spacexdata.com/v4/launches/query',
          query(currentOffset, startDateSearch, endDateSearch),
        )
        .then(async (res: any) => {
          const data = await res.data;
          setCurrentOffset((prevState) => prevState + 6);
          setProducts([...spaces, ...data.docs]);
        })
        .catch((err) => console.log(err))
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [spaces]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      2
    ) {
      setFetching(true);
    }
  };

  return (
    <div>
      <Layout
        handleDataSeach={handleDataSeach}
        spaces={spaces}
        startDateSearch={startDateSearch}
        endDateSearch={endDateSearch}
        setStartDateSearch={setStartDateSearch}
        setEndDateSearch={setEndDateSearch}
      />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.post(
    'https://api.spacexdata.com/v4/launches/query',
    query(0, new Date('2006-01-01'), new Date()),
  );
  const total = await data.totalDocs;

  return {
    props: {
      initialSpaces: data.docs,
      initialTotalDocs: total,
    },
  };
};
