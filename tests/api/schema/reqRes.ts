import { z } from "zod";

export const getPostByIdSchema = z.object({
    id: z.number(),
    userId: z.number(),
    title: z.string(),
    body: z.string(),
}).strict();


export const createPostSchemaResponse = z.object({
    id: z.number(),
    userId: z.number(),
    title: z.string(),
    body: z.string(),
}).strict();


export const graphCharactersSchema = z.object({
    data: z.object({
        characters: z.object({
            info: z.object({
                count: z.number()
            }),
            results: z.array(z.object({
                id: z.string(),
                name: z.string(),
                status: z.string(),
                gender: z.string(),
                species: z.string()
            }))
        })
    })
}).strict();