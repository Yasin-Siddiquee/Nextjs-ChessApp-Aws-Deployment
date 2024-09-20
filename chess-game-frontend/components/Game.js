"use client";

import { useEffect, useState } from 'react';
import {Chessboard} from 'react-chessboard';
import { Chess } from 'chess.js';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust if needed

const Game = () => {
  const [game, setGame] = useState(new Chess());

  useEffect(() => {
    socket.on('move', (move) => {
      game.move(move);
      setGame(new Chess(game.fen()));
    });

    return () => {
      socket.off('move');
    };
  }, [game]);

  const makeMove = (move) => {
    if (game.move(move)) {
      setGame(new Chess(game.fen())); // Update game state
      socket.emit('move', move); // Send move to the server
    }
  };

  return <Chessboard position={game.fen()} onPieceDrop={makeMove} />;
};

export default Game;
