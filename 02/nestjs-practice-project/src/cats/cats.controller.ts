import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/commons/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from 'src/commons/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { SuccessInterceptor } from 'src/commons/interceptors/success.interceptor';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from './dto/cat.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '고양이 목록을 가져옵니다..' })
  @Get()
  getCurrentCat() {
    return 'currentCat';
  }

  @ApiOperation({ summary: '회원가입을 위한 API입니다.' })
  @ApiResponse({
    status: 500,
    description: '서버 에러 발생 시',
  })
  @ApiResponse({
    status: 200,
    description: 'api 정상 동작',
    type: ReadOnlyCatDto,
  })
  @Post()
  async singUp(@Body() body: CatRequestDto) {
    return await this.catsService.signup(body);
  }

  @ApiOperation({ summary: '로그인을 위한 API입니다.' })
  @Post('login')
  login() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃을 위한 API입니다.' })
  @Post('logout')
  logout() {
    return 'logout';
  }

  @ApiOperation({ summary: '이미지 업로드를 위한 API입니다.' })
  @Post('upload/cats')
  uploadCatImage() {
    return 'login';
  }
}
