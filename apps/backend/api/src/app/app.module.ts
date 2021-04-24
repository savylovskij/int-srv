import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
