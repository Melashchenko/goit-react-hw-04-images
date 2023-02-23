import { LoaderSpinner } from './Loader.styled';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => (
  <LoaderSpinner>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#d9e3e7"
      color="#3f51b5"
    />
  </LoaderSpinner>
);
