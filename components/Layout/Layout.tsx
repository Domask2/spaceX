import Head from 'next/head';
import DataPickerForm from '../DataPickerForm/DataPickerForm';
import Spaces from '../Spaces/Spaces';
import { Wrapper } from './Layout.style';

type ISpaces = {
  data_local: Date;
  data_utc: Date;
  details: string;
  id: string;
  links: Array<any>;
  name: string;
  success: boolean;
};

type Props = {
  spaces: [ISpaces] | null;
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  error: string;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};

const Layout: React.FC<Props> = ({
  spaces,
  error,
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
        error={error}
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
