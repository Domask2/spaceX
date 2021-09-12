import Head from "next/head";
import DataPickerForm from "../DataPickerForm/DataPickerForm";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Spaces from "../Spaces/Spaces";
import { Wrapper } from "./Layout.style";
import { PropsLayout } from "../../type/index";
import Spinner from "../Spinner/Spinner";
const Layout: React.FC<PropsLayout> = ({
  spaces,
  fetching,
  startDateSearch,
  totalDocs,
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
      <ScrollUpButton ShowAtPosition={100} />
      <div className="fetching">
        {fetching && <Spinner />}
        {spaces?.length === totalDocs && (
          <h3 className="page-end">Данные по запускам SpaceX больше нет</h3>
        )}
      </div>
    </Wrapper>
  );
};

export default Layout;
