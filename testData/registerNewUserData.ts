import { randomUUID } from 'node:crypto';

export function generateUser() {
  return {
    email: `test-${randomUUID()}@example.com`,
    password: "Pa$$w0rd!",
  };
}