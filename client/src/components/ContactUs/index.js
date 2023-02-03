import Loadable from 'react-loadable';
import Loader from '../../common/Loader'

export default Loadable({
    loader: () => import("./ContactUs"),
    loading: Loader,
});

