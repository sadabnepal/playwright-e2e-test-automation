import { queryRickAndMortyDetails } from "@api/data/graphql";
import { queryGraphQl } from "@api/helper/httpCalls";
import { graphQlResponseSchema } from "@api/schema/reqRes";
import { env } from "@env/manager";
import { expect, test } from "@playwright/test";

test("graphql: query operation", { tag: "@graphql" }, async () => {

    const response = await queryGraphQl(env.GRAPHQL_URL, queryRickAndMortyDetails);
    expect(response.status()).toEqual(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 4));

    graphQlResponseSchema.parse(body);
});