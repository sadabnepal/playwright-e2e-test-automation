type UserRoles = "Admin" | "ESS";
export type UserStatus = "Enabled" | "Disabled";

export interface ICreateUser {
    role: UserRoles;
    name: string;
    status: UserStatus;
    username: string;
    password: string;
}