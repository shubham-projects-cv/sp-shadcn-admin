import '@testing-library/jest-dom'

// Example: apply global theme if needed
beforeAll(() => {
  document.documentElement.classList.add('dmacq')
})

// Reset DOM after each test (safety)
afterEach(() => {
  document.body.innerHTML = ''
})