import { Injectable, PipeTransform, HttpException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value > 0 필요', 400);
    }
    return value;
  }
}
