import { Injectable } from '@angular/core';
import { Onboarding } from '../interface/onboarding.interface';

@Injectable({
  providedIn: 'root',
})
export class OnboardingserviceService {
  readonly url = 'http://localhost:3000/onboardings';

  constructor() {}

  async getOnbordings(): Promise<Onboarding[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  //onboardings with status that is not rejected.count of status != "REJECTED"
  async totalOnboarding(): Promise<number> {
    try {
      const response = await fetch(this.url);

      const alltheonboarding: Onboarding[] = await response.json();

      const count = alltheonboarding.filter(
        (alltheonboarding) => alltheonboarding.status !== 'REJECTED'
      ).length;

      return count;
    } catch (error) {
      console.log('Error fetching the onboardings');
      return 0;
    }
  }

  //drop offs:(START – APPROVED) / START * 100
  async getDropOffPercentage(): Promise<number> {
    try {
      const response = await fetch(this.url);
      const alltheonboarding: Onboarding[] = await response.json();

      const totalStart = alltheonboarding.filter(
        (alltheonboarding) => alltheonboarding.stage == 'START'
      ).length;

      const totalApproved = alltheonboarding.filter(
        (alltheonboarding) => alltheonboarding.stage == 'APPROVED'
      ).length;

      return ((totalStart - totalApproved) / totalStart) * 100;
    } catch (error) {
      console.log('Error in getting the drop - off percentages');

      return 0;
    }
  }

  //Avg. Approval Time
  async getAvgApprovaltime(): Promise<number> {
    try {
      const response = await fetch(this.url);
      const alltheonboarding: Onboarding[] = await response.json();

      const totalapprovals = alltheonboarding.filter(
        (alltheonboarding) => alltheonboarding.status == 'APPROVED'
      ).length; //all the aprovals

      function getTotalApprovedDuration(onboardings: Onboarding[]): number {
        let totalDutation = 0;
        for (const numval of onboardings) {
          if (numval.status === 'APPROVED') {
            totalDutation = totalDutation + numval.durationSec;
          }
        }
        return totalDutation;
      }

      const totalTime = getTotalApprovedDuration(alltheonboarding); //sum of all the duration

      const avgApprovalTime =
        totalapprovals > 0 ? totalTime / totalapprovals : 0;

      return Math.round(avgApprovalTime);
    } catch (err) {
      console.log('Error in getting the approvals', err);
      return 0;
    }
  }

  // KYC Failures
  async kycfailures(): Promise<number> {
    try {
      const response = await fetch(this.url);
      const alltheonboarding: Onboarding[] = await response.json();

      const count = alltheonboarding.filter(
        (alltheonboarding) => alltheonboarding.status == 'REJECTED'
      ).length;

      return count;
    } catch (err) {
      console.log('Error is gettin the kyc failure', err);
      return 0;
    }
  }
}
