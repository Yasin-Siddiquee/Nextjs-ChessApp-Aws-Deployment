import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Move } from './move.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.games)
  whitePlayer: User;

  @ManyToOne(() => User, user => user.games)
  blackPlayer: User;

  @OneToMany(() => Move, move => move.game)
  moves: Move[];

  @Column()
  result: string; // win, loss, draw
}
