import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUnityDto {
  @IsNotEmpty({ message: "O campo 'nome' é obrigatório." })
  @IsString({ message: "O Campo 'nome' é obrigatório" })
  name: string;
}
