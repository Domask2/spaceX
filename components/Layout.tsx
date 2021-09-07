import Head from 'next/head';
import DataPickerForm from './DataPickerForm/DataPickerForm';

const Layout = () => {
  return (
    <div>
      <Head>
        <title>Space-X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DataPickerForm />
    </div>
  );
};

export default Layout;
