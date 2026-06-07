import { UserStatus } from "./user";

export interface ICreateEmployee {
    employeeDetails: {
        firstName: string;
        middleName: string;
        lastName: string;
        employeeId: string;
    };
    loginDetails?: {
        username: string;
        password: string;
        status: UserStatus;
    };
}