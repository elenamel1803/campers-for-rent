import { Hourglass } from 'react-loader-spinner';
import { LoadWrap } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoadWrap>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['var(--button-hover)', 'var(--button)']}
      />
    </LoadWrap>
  );
};

export default Loader;
