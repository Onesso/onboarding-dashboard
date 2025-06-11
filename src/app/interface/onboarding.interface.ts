export interface Onboarding {
  id: string;
  fullName: string;
  nationalId: string;
  dateStarted: string; // ISO date string
  stage: string; //START', 'DOCS', 'KYC', 'APPROVED'
  status: string; // 'PENDING', 'APPROVED', 'REJECTED'
  kycScore: number;
  durationSec: number;
}
