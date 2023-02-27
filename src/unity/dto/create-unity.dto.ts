import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator/types/decorator/decorators';

export class CreateUnityDto {
  @IsNotEmpty({ message: "O campo 'nome' é obrigatório." })
  @IsString({ message: "O Campo 'nome' é obrigatório" })
  name: string;
}
