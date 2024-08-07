import { CoctailDto } from './coctail-dto';

export interface Coctail extends CoctailDto {
  isFavourite: boolean;
}
