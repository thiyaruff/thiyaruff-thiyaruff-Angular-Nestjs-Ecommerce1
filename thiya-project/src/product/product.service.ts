import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { DataSource, getRepository, Repository} from 'typeorm';





@Injectable()


export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    private dataSource: DataSource
  ){}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.create({...createProductDto})

    await this.productRepository.save(newProduct)

    return newProduct;
  }

  async findAll() {
    return await this.productRepository.find()
  } 

  async findOne(id: string) {
    const findProduct = await this.productRepository.findOne({where:{id:id}})
    
    if (!findProduct){
      throw new HttpException('No product found', HttpStatus.NOT_FOUND)
    }

    return findProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const
     {title,
    description,
    imgUrl1,
    price,
    quantity,
    size,
    color,
    shippings,
    gender,
    brands,
    category,
    subcategory} = updateProductDto;

    const findProduct = await this.productRepository.findOne({where:{id:id}})
    
    if (!findProduct){
      throw new HttpException('No product found', HttpStatus.NOT_FOUND)
    }

    let updateProduct:any ={}

    title && (updateProduct.title=title);
    description && (updateProduct.description=description);
    imgUrl1 && (updateProduct.imgUrl1=imgUrl1);
    price && (updateProduct.price=price);
    quantity && (updateProduct.quantity=quantity);
    size && (updateProduct.size=size);
    color && (updateProduct.color=color);
    shippings && (updateProduct.shippings=shippings);
    gender && (updateProduct.gender=gender);
    brands && (updateProduct.brands=brands);
    category && (updateProduct.category=category);
    subcategory && (updateProduct.subcategory=subcategory)

    await this.productRepository.update({id:id}, updateProduct)

    const findProductAgain =await this.productRepository.findOne({where:{id:id}})

    return findProductAgain;
  }

  async remove(id: string) {
    const findProduct = await this.productRepository.findOne({where:{id:id}})
    
    if (!findProduct){
      throw new HttpException('No product found', HttpStatus.NOT_FOUND)
    }
    await this.productRepository.remove(findProduct)

    return 'This product has deleted'
  }

  async findProductBycategory(name:string){
    const findProduct=await this.dataSource.getRepository(ProductEntity).createQueryBuilder('product')
    .where("product.subcategory=:name",{name}).getMany()
   
    console.log("name:",name)
    console.log("findProduct", findProduct)
    return findProduct
  }
}
