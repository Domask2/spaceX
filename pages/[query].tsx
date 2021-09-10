import axios from 'axios';
import { GetServerSideProps } from 'next';
import { queryDaty } from '../Query/query';
import { useRouter } from 'next/router';

const Query = ({ serverTrack }: { serverTrack: any }) => {
  const router = useRouter();
  const { query } = router.query;
  console.log(router.query.date);
  console.log(router);
  return <h1>query</h1>;
};

export default Query;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.post('https://api.spacexdata.com/v4/launches/query', queryDaty());
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
