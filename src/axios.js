import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c0484-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

/* instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; 
instance.defaults.headers.post['Content-Type'] = 'aplication/json';
 */
/**
 * we can import this axios instance and call api on this instance 
 */
export default instance;

