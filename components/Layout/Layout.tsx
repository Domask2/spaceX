import Head from 'next/head';
import DataPickerForm from '../DataPickerForm/DataPickerForm';
import Spaces from '../Spaces/Spaces';
import { Wrapper } from './Layout.style';
import { PropsLayout } from '../../type/index';

const Layout: React.FC<PropsLayout> = ({
  spaces,
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
  resetSeactDate,
}) => {
  return (
    <Wrapper>
      <Head>
        <title>Space-X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataPickerForm
        handleDataSeach={handleDataSeach}
        resetSeactDate={resetSeactDate}
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
