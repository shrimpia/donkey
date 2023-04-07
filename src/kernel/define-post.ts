import { ZodType } from 'zod';
import { RouteHandlerMethod } from 'fastify';
import { toErrorResponse } from '@/kernel/to-error-response';
import { PostOptions } from '@/kernel/post-options';
import { getToken } from '@/kernel/get-token';

export const definePost = <
  T1 extends ZodType,
  T2 extends ZodType,
  T3 extends boolean,
>(
    opts: PostOptions<T1, T2, T3>,
  ): RouteHandlerMethod => {
  return (req, res) => {
    // パラメータのバリデーション
    const paramsParseResult = opts.paramsDef.safeParse(req.params);
    if (!paramsParseResult.success) {
      res.statusCode = 422;
      return toErrorResponse(
        paramsParseResult.error,
        'Failed to validate parameters',
      );
    }
    // ボディのバリデーション
    const bodyParseResult = opts.bodyDef.safeParse(req.body);
    if (!bodyParseResult.success) {
      res.statusCode = 422;
      return toErrorResponse(bodyParseResult.error, 'Failed to validate body');
    }

    const token = getToken(req.headers.authorization);
    if (opts.requireToken && !token) {
      return {
        error: 'Invalid Access Token',
      };
    }

    return opts.run({
      params: paramsParseResult.data,
      body: bodyParseResult.data,
      token: token as any,
      req,
      res,
    });
  };
};
