const request = require('supertest')
const app = require('../src/app')

describe('Маршруты приложения', () => {
  test('GET / возвращает строку "KT3 App"', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.text).toBe('KT3 App сломан нарочно')
  })

  test('GET /health возвращает { status: "ok" }', async () => {
    const response = await request(app).get('/health')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ status: 'ok' })
  })

  test('неизвестный маршрут возвращает 404 в формате JSON', async () => {
    const response = await request(app).get('/unknown')

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: 'Маршрут не найден' })
  })
})
