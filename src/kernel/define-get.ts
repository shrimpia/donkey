import z, { ZodType } from 'zod';
import { RouteHandlerMethod } from 'fastify';
import { toErrorResponse } from '@/kernel/to-error-response';
import { GetOptions } from '@/kernel/get-options';

export const defineGet = <T1 extends ZodType, T2 extends ZodType>(
  opts: GetOptions<T1, T2>,
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

    return opts.run(paramsParseResult.data, queryParseResult.data, req, res);
  };
};
