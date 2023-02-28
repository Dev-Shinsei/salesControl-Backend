import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UnityModule } from './unity/unity.module';

@Module({
  imports: [UnityModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
