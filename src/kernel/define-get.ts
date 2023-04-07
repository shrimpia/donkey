import { RouteHandlerMethod } from 'fastify';
import { ZodType } from 'zod';

import { GetOptions } from '@/kernel/get-options';
import { getToken } from '@/kernel/get-token';
import { toErrorResponse } from '@/kernel/to-error-response';

export const defineGet = <
  T1 extends ZodType,
  T2 extends ZodType,
  T3 extends boolean,
>(
    opts: GetOptions<T1, T2, T3>,
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
    // クエリのバリデーション
    const queryParseResult = opts.queryDef.safeParse(req.query);
    if (!queryParseResult.success) {
      res.statusCode = 422;
      return toErrorResponse(
        queryParseResult.error,
        'Failed to validate queries',
      );
    }

    // トークンのバリデーション
    const token = getToken(req.headers.authorization);
    if (opts.requireToken && !token) {
      return {
        error: 'Invalid Access Token',
      };
    }

    return opts.run({
      params: paramsParseResult.data,
      query: queryParseResult.data,
      token: token as any,
      req,
      res,
    });
  };
};
