import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChessGateway } from './chess/chess.gateway';
// Import your entities here
import { User } from './entities/user.entity';
import { Game } from './entities/game.entity';
import { Move } from './entities/move.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'chessuser',
      password: 'yourpassword',
      database: 'chess_game',
      entities: [User, Game, Move], // Define entities
      synchronize: true,
    }),
  ],
  providers: [ChessGateway],
})
export class AppModule {}
