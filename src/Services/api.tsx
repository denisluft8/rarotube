import axios from 'axios'

const api = axios.create({
  baseURL: 'https://44.199.200.211:3320/',
  headers: {
    'Accept': "application/json, text/plain, */*",
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export default api