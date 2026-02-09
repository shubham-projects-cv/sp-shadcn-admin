import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL } from './config.js'

export const options = {
  vus: 5,
  duration: '30s',

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
}

export default function () {
  const res = http.get(`${BASE_URL}/`)

  check(res, {
    'status 200': (r) => r.status === 200,
    'fast response': (r) => r.timings.duration < 500,
  })

  sleep(1)
}