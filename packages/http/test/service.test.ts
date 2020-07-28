/**
 * @jest-environment node
 */

import { MembersService } from '../src/Services/Members';
const baseURL =
  'https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/abc/';
const svc = new MembersService(baseURL);

test('Member Service URL', async () => {
  try {
    await svc.get('5');
  } catch (e) {
    expect(e.config.baseURL).toBe(`${baseURL}Members`);
  }
});

test('Member Service 401', async () => {
  try {
    await svc.get('5');
  } catch (e) {
    expect(e.response.status).toBe(401);
  }
});

test('Member Service Token Factory', async () => {
  const factorySvc = new MembersService(baseURL, () =>
    Promise.resolve('mytoken')
  );
  try {
    await factorySvc.get('5');
  } catch (e) {
    expect(e.config.headers.Authorization).toBe('Bearer mytoken');
  }
});
