import axios from 'axios';

export default axios.create({
  baseURL: 'https://streamy-api.herokuapp.com/'
});