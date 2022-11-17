import {
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

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  addCat() {
    return 'create cat';
  }

  @Get()
  getAllCats() {
    console.log('interceptor test');
    return {
      cats: 'hihi',
    };
  }

  @Get(':id')
  getCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    return 'one cat';
  }

  @Put(':id')
  setCat() {
    return 'update cat';
  }

  @Patch(':id')
  patchSetCat() {
    return 'patch Cat';
  }

  @Delete(':id')
  removeCat() {
    return 'delete cat';
  }
}
