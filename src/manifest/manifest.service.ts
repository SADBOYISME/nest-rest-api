import { Injectable } from '@nestjs/common';
import { CreateManifestDto } from './dto/create-manifest.dto';
import { UpdateManifestDto } from './dto/update-manifest.dto';

@Injectable()
export class ManifestService {
  create(createManifestDto: CreateManifestDto) {
    console.log('createManifestDto: ', createManifestDto);
    return 'This action adds a new manifest';
  }

  findAll() {
    return `This action returns all manifest lol 123123`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manifest`;
  }

  update(id: number, updateManifestDto: UpdateManifestDto) {
    return `This action updates a #${id} manifest`;
  }

  remove(id: number) {
    return `This action removes a #${id} manifest`;
  }
}
