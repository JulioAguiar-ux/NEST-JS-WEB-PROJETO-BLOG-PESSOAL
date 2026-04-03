import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from "src/postagem/entities/tema.entity";
import { TemaController } from 'src/postagem/tema/controllers/tema.controllers';
import { TemaService } from "src/postagem/tema/services/tema.services";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    controllers: [TemaController],
    providers: [TemaService],
    exports: [TemaService],
})
export class TemaModule {}