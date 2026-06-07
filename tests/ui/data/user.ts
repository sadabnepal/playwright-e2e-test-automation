import { faker } from "@faker-js/faker";
import { ICreateUser } from "@ui/interface/user";

export const adminUserData = (existingUser: string): ICreateUser => {
    return {
        role: "Admin",
        name: existingUser,
        status: "Enabled",
        username: faker.internet.username(),
        password: faker.internet.password()
    };
};