import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';

import axios from 'axios';

import Layout from '../components/Layout/Layout';

import { query } from '../Query/query';

const Home = ({
  initialSpaces,
  initialTotalDocs,
}: {
  initialSpaces: any;
  initialTotalDocs: number;
}) => {
  const [spaces, setProducts] = useState<any>(initialSpaces);
  const [fetching, setFetching] = useState(false);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [totalDocs, setTotalDocs] = useState<number>(initialTotalDocs);

  const [startDateSearch, setStartDateSearch] = useState<string>('2006-01-01');
  const [endDateSearch, setEndDateSearch] = useState<any>(new Date());

  //   useEffect(() => {
  //     if (fetching) {

  //         // request(currentOffset)
  //         //     .then(async (res) => {
  //         //         const data = await res.json()
  //         //         setLaunches([...launches, ...data])
  //         //         setTotalLaunches(Number(res.headers.get('spacex-api-count')))
  //         //         setCurrentOffset(prevState => prevState + 6)
  //         //     })
  //         //     .catch((err) => console.log(err))
  //         //     .finally(() => setFetching(false))
  //     }
  // }, [fetching]);

  useEffect(() => {
    if (fetching) {
      setCurrentOffset((prevState) => prevState + 6);
      (async () => {
        const { data } = await axios.post(
          'https://api.spacexdata.com/v4/launches/query',
          query(currentOffset, startDateSearch, endDateSearch),
        );

        setProducts([...spaces, ...data.docs]);
      })();
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
        10000 &&
      spaces.length < totalDocs
    ) {
      setFetching(true);
    }
  };

  return (
    <div>
      <Layout
        spaces={spaces}
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
    query(0, '2006-01-01', new Date()),
  );
  const total = await data.totalDocs;

  return {
    props: {
      initialSpaces: data.docs,
      initialTotalDocs: total,
    },
  };
};
