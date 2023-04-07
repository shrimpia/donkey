import { FastifyReply, FastifyRequest } from 'fastify';
import z, { ZodType } from 'zod';

export interface PostOptions<
  TParamDef extends ZodType,
  TBodyDef extends ZodType,
  TRequireToken extends boolean,
> {
  paramsDef: TParamDef;
  bodyDef: TBodyDef;
  requireToken: TRequireToken;
  run: (props: {
    params: z.infer<TParamDef>;
    body: z.infer<TBodyDef>;
    token: TRequireToken extends true ? string : string | null;
    req: FastifyRequest;
    res: FastifyReply;
  }) => any;
}
