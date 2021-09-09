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
  handleDataSeach: (e: any) => void;
};

const Layout: React.FC<Props> = ({
  spaces,
  startDateSearch,
  endDateSearch,
  setStartDateSearch,
  setEndDateSearch,
  handleDataSeach,
}) => {
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
