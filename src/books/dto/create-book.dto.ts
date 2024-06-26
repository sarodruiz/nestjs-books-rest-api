import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsEnum(['fiction', 'fantasy', 'novel'], {
        message: 'Valid genre required'
    })
    @IsNotEmpty()
    genre: 'fiction' | 'fantasy' | 'novel';
}
