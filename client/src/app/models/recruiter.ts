import { Application } from "./application";

export interface Recruiter {
    id: number,
    fullname: string,
    email: string,
    password: string,
    contact: string,
    company: string,
    speciality: string,
    application: Application[],
    posted: string[];
}
