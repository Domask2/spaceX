import Head from 'next/head';
import DataPickerForm from '../DataPickerForm/DataPickerForm';
import Spaces from '../Spaces/Spaces';
import { Wrapper } from './Layout.style';

const Layout = ({
  spaces,
  setStartDateSearch,
  setEndDateSearch,
}: {
  spaces: any;
  setEndDateSearch: any;
  setStartDateSearch: any;
}) => {
  console.log(spaces);
  return (
    <Wrapper>
      <Head>
        <title>Space-X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DataPickerForm setStartDateSearch={setStartDateSearch} setEndDateSearch={setEndDateSearch} />
      <Spaces spaces={spaces} />
    </Wrapper>
  );
};

export default Layout;
