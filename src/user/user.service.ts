/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto, UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(dto: UserDto) {
    const user = await this.prisma.user.create({
      data: dto,
    });
    return user;
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }
    return { msg: 'user not found' };
  }

  async deleteUser(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    if (user) {
      return { msg: 'user deleted successfully', user };
    }
    return { msg: 'user not found' };
  }

  async editUser(id: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: dto,
    });
    if (user) {
      return user;
    }
    return { msg: 'user not found' };
  }
}
