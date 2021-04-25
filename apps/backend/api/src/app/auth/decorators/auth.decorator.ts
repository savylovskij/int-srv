import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SignIn = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const arg = ctx.getArgs()[1];
    return { username: arg.username, password: arg.password };
  }
);
