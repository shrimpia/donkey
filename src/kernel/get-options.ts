import { FastifyReply, FastifyRequest } from 'fastify';
import z, { ZodType } from 'zod';

export interface GetOptions<
  TParamDef extends ZodType,
  TQueryDef extends ZodType,
  TRequireToken extends boolean,
> {
  paramsDef: TParamDef;
  queryDef: TQueryDef;
  requireToken: TRequireToken;
  run: (props: {
    params: z.infer<TParamDef>;
    query: z.infer<TQueryDef>;
    token: TRequireToken extends true ? string : null;
    req: FastifyRequest;
    res: FastifyReply;
  }) => any;
}
