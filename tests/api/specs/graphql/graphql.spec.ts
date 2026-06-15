import { getAllCharacters, queryFilterCharacterByName } from "@api/data/graphql";
import { queryGraphQl } from "@api/helper/httpCalls";
import { graphCharactersSchema } from "@api/schema/reqRes";
import { env, TEST_ENV } from "@env/manager";
import { expect, test } from "@playwright/test";

const testEnvTag = `@env:${TEST_ENV}`;

test("graphql: query all characters", { tag: ["@graphql", testEnvTag] }, async () => {

    const response = await queryGraphQl(env.GRAPHQL_URL, getAllCharacters());
    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log("body", JSON.stringify(body, null, 2));

    graphCharactersSchema.parse(body);
});


test("graphql: filter character by name", { tag: ["@graphql", testEnvTag] }, async () => {
    const response = await queryGraphQl(env.GRAPHQL_URL, queryFilterCharacterByName("Alien Morty"));

    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log("body", JSON.stringify(body, null, 2));


    expect(body.data.characters).toMatchObject({
        info: { count: 1 },
        results: [
            {
                id: "14",
                name: "Alien Morty",
                status: "unknown",
                gender: "Male",
                species: "Alien"
            }
        ]
    });

});