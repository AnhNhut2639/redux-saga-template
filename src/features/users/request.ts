import axios from 'axios';
export function GetUserAPI() {
  return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
}
