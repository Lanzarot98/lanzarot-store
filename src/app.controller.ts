import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'Con /sas/';
  }

  @Get('products/filter')
  getProductFilter() {
    return `I am a filter`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product with id ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    // const { limit, offset } = params;
    return `Products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `Product with id ${productId} and ${id}`;
  }
}
