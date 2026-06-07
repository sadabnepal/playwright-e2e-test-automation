import { request } from "@playwright/test";


export async function getRestApiRequest(baseUrl: string, endpoint: string) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.get(baseUrl.concat(endpoint));
    return response;
}

export async function postRestApiRequest(baseUrl: string, endpoint: string, payload: Record<string, string | number>) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl.concat(endpoint), {
        data: payload
    });
    return response;
}


export async function queryGraphQl(baseUrl: string, query: string | object) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl, {
        data: { query: query }
    });
    return response;
}