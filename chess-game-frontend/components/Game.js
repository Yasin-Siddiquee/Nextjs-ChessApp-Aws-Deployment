"use client"; // For client-side hooks

import { useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard'; 
import { Chess } from 'chess.js';

const Game = () => {
  const [game, setGame] = useState(new Chess()); // Initialize game state

  // Function to handle move making
  const makeMove = (move) => {
    const result = game.move(move); // Try to make the move

    if (result) {
      // If move is valid, update the game state
      setGame(new Chess(game.fen()));
    } else {
      console.log("Invalid move", move); // Handle invalid moves
    }

    // Check for game over (checkmate, stalemate, draw)
    if (game.isGameOver()) {
      console.log("Game over:", game.isCheckmate() ? "Checkmate!" : "Stalemate/Draw");
    }
  };

  // Function to handle piece drop
  const onDrop = (sourceSquare, targetSquare) => {
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Auto-promote to queen on the 8th rank
    };

    makeMove(move); // Try to make the move
  };

  return (
    <div>
      <Chessboard 
        position={game.fen()} // Update position based on current game FEN
        onPieceDrop={onDrop} // Handle dropping of pieces
      />
      {game.isGameOver() && <p>Game Over!</p>} {/* Display if game is over */}
    </div>
  );
};

export default Game;


