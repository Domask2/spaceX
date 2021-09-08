import Head from 'next/head';
import DataPickerForm from '../DataPickerForm/DataPickerForm';
import Spaces from '../Spaces/Spaces';
import { Wrapper } from './Layout.style';

const Layout = ({
  spaces,
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
}: {
  spaces: any;
  startDateSearch: any;
  endDateSearch: any;
  setEndDateSearch: any;
  setStartDateSearch: any;
  handleDataSeach: any;
}) => {
  console.log(spaces);
  return (
    <Wrapper>
      <Head>
        <title>Space-X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DataPickerForm
        handleDataSeach={handleDataSeach}
        startDateSearch={startDateSearch}
        endDateSearch={endDateSearch}
        setStartDateSearch={setStartDateSearch}
        setEndDateSearch={setEndDateSearch}
      />
      <Spaces spaces={spaces} />
    </Wrapper>
  );
};

export default Layout;
