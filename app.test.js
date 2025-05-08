const request = require('supertest');
const server = require('./app');

describe('Simple Node HTTP Server', () => {
  let app;

  beforeAll((done) => {
    app = server.listen(4001, done);
  });

  afterAll((done) => {
    app.close(done);
  });

  it('responds with Hello from Node.js app', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js app\n');
  });
});