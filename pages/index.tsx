import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import axios from 'axios';

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

import { query } from '../Query/query';

const Home = ({initialSpaces, initialTotalDocs} : {initialSpaces:any, initialTotalDocs:number}) => {
  const [spaces, setProducts] = useState<any>(initialSpaces);
  const [gte, setGte] = useState<Date | string>('2006-01-01');
  const [lte, setLte] = useState<Date | string>(new Date());

  const [currentOffset, setCurrentOffset] = useState<number>();
  const [totalDocs, setTotalDocs] = useState<number | null>(initialTotalDocs);

  return (
    <div className={styles.container}>
      <Layout spaces={spaces} setGte={setGte} setLte={setLte} />
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
          initialSpaces: data,
          initialTotalDocs: total
      }
      
    }
}
