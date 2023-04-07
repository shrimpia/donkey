import { ZodError } from 'zod';

export const toErrorResponse = (e: ZodError, message: string) => {
  const flattened = e.flatten();
  const errors = [
    ...flattened.formErrors,
    ...Object.entries(flattened.fieldErrors).map((kv) => kv.join(' ')),
  ];
  return {
    error: `${message}: ${errors.join(', ')}`,
  };
};
