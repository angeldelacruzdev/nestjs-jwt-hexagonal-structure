import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'soft2now',
        password: 'soft2now',
        database: 'soft2now',
        entities: [
          /* Importa tus entidades aquí */
        ],
        synchronize: true, // ¡CUIDADO! Utilizar solo en desarrollo para crear tablas automáticamente. En producción, configurar a false y utilizar migraciones.
      }),
    }),
  ],
})
export class DatabaseModule {}
