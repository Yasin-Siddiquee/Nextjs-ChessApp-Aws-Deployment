import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Move {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  move: string;

  @ManyToOne(() => Game, game => game.moves)
  game: Game;
}
