import { createRandomPostData } from "@api/data/restApi";
import { getRestApiRequest, postRestApiRequest } from "@api/helper/httpCalls";
import { createPostSchemaResponse, getPostByIdSchema } from "@api/schema/reqRes";
import { env } from "@env/manager";
import { expect, test } from "@playwright/test";

test("rest api: get post", { tag: "@api" }, async () => {
    const response = await getRestApiRequest(env.REST_URL, "/posts/1");

    const body = await response.json();
    console.log(body);

    expect(response.status()).toEqual(200);

    expect(body).toBeDefined();
    expect(body.id).toEqual(1);
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");
});

test("rest api: create user", { tag: "@api" }, async () => {
    const payload = createRandomPostData;

    const response = await postRestApiRequest(env.REST_URL, "/posts", payload);
    expect(response.status()).toEqual(201);

    const body = await response.json();

    console.log(body);

    expect(body.title).toEqual(payload.title);
    expect(body.body).toEqual(payload.body);
    expect(body.userId).toEqual(payload.userId);
    expect(body.id).toBeDefined();
});

test("rest api: get user schema validation", { tag: "@api" }, async () => {
    const response = await getRestApiRequest(env.REST_URL, "/posts/1");
    expect(response.status()).toEqual(200);

    getPostByIdSchema.parse(await response.json());
});

test("rest api: create user schema validation", { tag: "@api" }, async () => {
    const payload = createRandomPostData;

    const response = await postRestApiRequest(env.REST_URL, "/posts", payload);
    expect(response.status()).toEqual(201);

    createPostSchemaResponse.parse(await response.json());
});