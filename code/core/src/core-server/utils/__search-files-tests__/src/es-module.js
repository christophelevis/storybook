import * as ns from 'external2';

export const p = 5;

export function q() {
  // intentionally empty, used as a test fixture
}

export class C {}

export { x as externalName } from 'external';

export { ns };

export default function () {
  return 'default';
}
