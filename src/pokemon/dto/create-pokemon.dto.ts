import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
