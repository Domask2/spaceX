import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import { query } from "../Query/query";
import { toDateFormat } from "./../Utils/index";
import { ISpaces, ISpacesDocs } from "../type";

import Spinner from "../components/Spinner/Spinner";

const Home = ({
  initialSpaces,
  initialTotalDocs,
}: {
  initialSpaces: [ISpaces] | null;
  initialTotalDocs: number;
}) => {
  const router = useRouter();
  const [spaces, setProducts] = useState<[ISpaces] | null | any>(initialSpaces);
  const [fetching, setFetching] = useState<boolean>(false);
  const [currentOffset, setCurrentOffset] = useState<number>(6);
  const [totalDocs, setTotalDocs] = useState<number | any>(initialTotalDocs);

  const [startDateSearch, setStartDateSearch] = useState<Date>(
    new Date("01-01-2006")
  );
  const [endDateSearch, setEndDateSearch] = useState<Date>(new Date());

  const remoteState = () => {
    setProducts(null);
    setCurrentOffset(0);
    setFetching(false);
  };

  const axiosGetData = (start: Date, end: Date) => {
    axios
      .post<ISpacesDocs>(
        "https://api.spacexdata.com/v4/launches/query",
        query(0, start, end)
      )
      .then(async (res) => {
        const data = await res.data;
        setProducts(data.docs);
        setCurrentOffset((prevState) => prevState + 6);
        setTotalDocs(data?.totalDocs)
      })
      .catch((err) => console.log(err));
  };

  const resetSeactDate = () => {
    remoteState();
    
    setStartDateSearch(new Date("01-01-2006"));
    setEndDateSearch(new Date());

    axiosGetData(new Date("01-01-2006"), new Date());
  };

  const handleDataSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!startDateSearch) return;

    remoteState();

    if (endDateSearch) {
      setStartDateSearch(startDateSearch);
      setEndDateSearch(endDateSearch);

      axiosGetData(startDateSearch, endDateSearch);

      router.push({
        query: {
          dateStart: toDateFormat(startDateSearch),
          dateEnd: toDateFormat(endDateSearch),
        },
      });
    } else {
      setStartDateSearch(startDateSearch);

      router.push({ query: { date: toDateFormat(startDateSearch) } });

      axiosGetData(
        new Date(new Date(startDateSearch).getTime() - 86400000),
        new Date(new Date(startDateSearch).getTime() + 86400000)
      );
    }
  };

  useEffect(() => {
    router.push({
      query: { dateStart: "01-01-2006", dateEnd: toDateFormat(new Date()) },
    });
  }, []);

  useEffect(() => {
    if (fetching) {
      axios
        .post<ISpacesDocs>(
          "https://api.spacexdata.com/v4/launches/query",
          query(currentOffset, startDateSearch, endDateSearch)
        )
        .then(async (res: any) => {
          const data = await res.data;
          setTotalDocs(data.totalDocs)
          setProducts([...spaces, ...data.docs]);
          setCurrentOffset((prevState) => prevState + 6);
        })
        .catch((err) => console.log(err))
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [spaces]);

  const scrollHandler = (e: any) => {

    if (
      (e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) < 50) && 
          spaces.length < totalDocs)
     {
      setFetching(true);
    }
  };
  console.log(totalDocs);
  return (
    <div>
      <Layout
        spaces={spaces}
        handleDataSeach={handleDataSeach}
        resetSeactDate={resetSeactDate}
        startDateSearch={startDateSearch}
        endDateSearch={endDateSearch}
        setStartDateSearch={setStartDateSearch}
        setEndDateSearch={setEndDateSearch}
      />

      {fetching && <div><Spinner/><div></div></div> }
      {spaces?.length === totalDocs &&
      <h3 className="page-end">Данные по запускам SpaceX больше нет</h3>}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.post<ISpacesDocs>(
    "https://api.spacexdata.com/v4/launches/query",
    query(0, new Date("01-01-2006"), new Date())
  );
  const total = await data.totalDocs;

  return {
    props: {
      initialSpaces: data.docs,
      initialTotalDocs: total,
    },
  };
};
