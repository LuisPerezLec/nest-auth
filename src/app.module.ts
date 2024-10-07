import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.66.61',
      port: 3306,
      username: 'user',
      password: 'root_password',
      database: 'yt_nest_auth',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register( {
      secret: 'secret',
      signOptions: {
        expiresIn: '1d'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
