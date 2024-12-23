/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { EditUserDto, UserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }

  @Post()
  createUser(@Body() dto : UserDto){
    return this.userService.createUser(dto)
  }

  @Patch(':id')
  editUser(@Body() dto:EditUserDto,
    @Param('id',ParseIntPipe) id:number){
    return this.userService.editUser(id,dto)
  }

  @Delete(':id')
  deleteUser(@Param('id',ParseIntPipe) id:number){
    return this.userService.deleteUser(id)
  }

  @Get(':id')
  getUser(@Param('id',ParseIntPipe) id:number){
    return this.userService.getUser(id)
  }


 

}
