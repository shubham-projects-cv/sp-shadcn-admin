import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 200 },
    { duration: '1m', target: 0 },
  ],

  thresholds: {
    http_req_failed: ['rate<0.05'],
  },
}

export default function () {
  const res = http.get(`${BASE_URL}/`)

  check(res, {
    'status ok': (r) => r.status === 200,
  })

  sleep(0.5)
}