import Head from 'next/head';
import { GetStaticProps } from 'next';
import DataPickerForm from '../DataPickerForm/DataPickerForm';
import axios from 'axios';
import Spaces from '../Spaces/Spaces';
import { Wrapper } from './Layout.style';

const Layout = ({ spaces, setLte, setGte }: { spaces: any; setGte: any; setLte: any }) => {
  console.log(spaces);
  return (
    <Wrapper>
      <Head>
        <title>Space-X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DataPickerForm setLte={setLte} setGte={setGte} />
      <Spaces />
    </Wrapper>
  );
};

export default Layout;
