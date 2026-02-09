import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  stages: [
    { duration: '1m', target: 25 },
    { duration: '3m', target: 25 },
    { duration: '1m', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(95)<800'],
  },
}

export default function () {
  const res = http.get(`${BASE_URL}/`)

  check(res, {
    'status 200': (r) => r.status === 200,
  })

  sleep(1)
}