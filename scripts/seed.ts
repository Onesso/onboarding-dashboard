
import { faker } from '@faker-js/faker';
import { writeFileSync } from 'node:fs';

const roles = ['admin', 'analyst'];
const stages = ['START', 'DOCS', 'KYC', 'APPROVED'];
const statuses = ['PENDING', 'APPROVED', 'REJECTED'];

function user() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    password: 'password', // plaintext for dev only
    role: faker.helpers.arrayElement(roles),
  };
}

function onboarding() {
  const started = faker.date.recent({ days: 40 });
  const stage = faker.helpers.arrayElement(stages);
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    nationalId: faker.string.numeric(8),
    dateStarted: started.toISOString(),
    stage,
    status:
      stage === 'APPROVED' ? 'APPROVED' : faker.helpers.arrayElement(statuses),
    kycScore: faker.number.int({ min: 60, max: 100 }),
    durationSec: faker.number.int({ min: 120, max: 1800 }),
  };
}

function event(onboardingId: string) {
  return ['START', 'DOCS', 'KYC', 'APPROVED'].map((type, idx) => ({
    id: faker.string.uuid(),
    onboardingId,
    type,
    timestamp: faker.date.soon({ days: 1, refDate: new Date() }).toISOString(),
    meta: { step: idx + 1 },
  }));
}

const users = Array.from({ length: 4 }, user);
const onboardings = Array.from({ length: 1000 }, onboarding);
const events = onboardings.flatMap((o) => event(o.id));
const settings = [
  { feature: 'bulkOnboarding', enabled: true },
  { feature: 'darkModeBeta', enabled: false },
];

writeFileSync(
  'db.json',
  JSON.stringify({ users, onboardings, events, settings }, null, 2)
);
