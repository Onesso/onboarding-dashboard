"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var node_fs_1 = require("node:fs");
var roles = ['admin', 'analyst'];
var stages = ['START', 'DOCS', 'KYC', 'APPROVED'];
var statuses = ['PENDING', 'APPROVED', 'REJECTED'];
function user() {
    return {
        id: faker_1.faker.string.uuid(),
        username: faker_1.faker.internet.userName(),
        password: 'password', // plaintext for dev only
        role: faker_1.faker.helpers.arrayElement(roles),
    };
}
function onboarding() {
    var started = faker_1.faker.date.recent({ days: 40 });
    var stage = faker_1.faker.helpers.arrayElement(stages);
    return {
        id: faker_1.faker.string.uuid(),
        fullName: faker_1.faker.person.fullName(),
        nationalId: faker_1.faker.string.numeric(8),
        dateStarted: started.toISOString(),
        stage: stage,
        status: stage === 'APPROVED' ? 'APPROVED' : faker_1.faker.helpers.arrayElement(statuses),
        kycScore: faker_1.faker.number.int({ min: 60, max: 100 }),
        durationSec: faker_1.faker.number.int({ min: 120, max: 1800 }),
    };
}
function event(onboardingId) {
    return ['START', 'DOCS', 'KYC', 'APPROVED'].map(function (type, idx) { return ({
        id: faker_1.faker.string.uuid(),
        onboardingId: onboardingId,
        type: type,
        timestamp: faker_1.faker.date.soon({ days: 1, refDate: new Date() }).toISOString(),
        meta: { step: idx + 1 },
    }); });
}
var users = Array.from({ length: 4 }, user);
var onboardings = Array.from({ length: 1000 }, onboarding);
var events = onboardings.flatMap(function (o) { return event(o.id); });
var settings = [
    { feature: 'bulkOnboarding', enabled: true },
    { feature: 'darkModeBeta', enabled: false },
];
(0, node_fs_1.writeFileSync)('db.json', JSON.stringify({ users: users, onboardings: onboardings, events: events, settings: settings }, null, 2));
