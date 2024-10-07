import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {

  }

  async create( data: any ): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOneById(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id }, // Busca directamente por el campo email
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email }, // Busca directamente por el campo email
    });
  }

}
