import { Job } from "./job";

export interface Applicant {
    id: number,
    fullname: string,
    username: string,
    email: string,
    password: string,
    contact: string,
    skills: string,
    appliedFor: Job[]
}
