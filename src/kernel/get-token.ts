const BEARER_PREFIX = 'Bearer ';

export const getToken = (authorization?: string | null) => {
  if (!authorization) return null;
  if (authorization.startsWith(BEARER_PREFIX)) return null;

  return authorization.slice(BEARER_PREFIX.length);
};
