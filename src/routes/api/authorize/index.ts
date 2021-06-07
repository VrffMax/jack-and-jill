import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<any, any> = (request) => {
    console.log(request);

    const result = {
        status: 200,
        body: '{"message":"done"}'
    };

    return result;
};