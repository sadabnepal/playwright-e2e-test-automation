import { faker } from "@faker-js/faker";
import { ICreateEmployee } from "@ui/interface/employee";
import { UserStatus } from "@ui/interface/user";

export const createEmployeeData = (status: UserStatus): ICreateEmployee => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        employeeDetails: {
            firstName: firstName,
            middleName: faker.person.middleName(),
            lastName: lastName,
            employeeId: faker.number.int({ min: 500, max: 5000 }).toString()
        },
        loginDetails: {
            username: firstName.concat("_").concat(lastName),
            password: faker.internet.password(),
            status: status
        }
    };
};