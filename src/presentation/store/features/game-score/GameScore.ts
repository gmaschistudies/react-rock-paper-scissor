import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';

interface GameScoreState {
  lastHand: {
    lastPlayerHand: string;
    lastOpponentHand: string;
  };
  score: {
    playerScore: number;
    opponentScore: number;
  };
  numberOfMatches: number;
  resultMessage: string;
}

interface PayloadPrepare {
  playerHand: string;
  winner: string;
  opponentHand: string;
}

const initialState: GameScoreState = {
  lastHand: {
    lastPlayerHand: '---',
    lastOpponentHand: '---',
  },
  score: {
    playerScore: 0,
    opponentScore: 0,
  },
  numberOfMatches: 0,
  resultMessage: '',
};

const possiblePlays = ['Rock', 'Paper', 'Scissor'];

const matchPlays: Record<string, string> = {
  Rock: 'Scissor',
  Paper: 'Rock',
  Scissor: 'Paper',
};

export const gameScoreSlice = createSlice({
  name: 'gameScore',
  initialState,
  reducers: {
    restartGame: () => initialState,
    validateScore: {
      reducer(state, action: PayloadAction<PayloadPrepare>) {
        state.lastHand.lastPlayerHand = action.payload.playerHand;
        state.lastHand.lastOpponentHand = action.payload.opponentHand;
        state.numberOfMatches += 1;
        if (action.payload.winner === 'player') {
          state.score.playerScore += 1;
          state.resultMessage = 'You Won!';
        } else if (action.payload.winner === 'opponent') {
          state.score.opponentScore += 1;
          state.resultMessage = 'Your opponent won!';
        } else {
          state.resultMessage = 'Tie!';
        }
      },
      prepare(playerHand: string) {
        let winner = '';
        const opponentHand =
          possiblePlays[Math.floor(Math.random() * (3 - 0) + 0)];
        if (matchPlays[playerHand] === opponentHand) {
          winner = 'player';
        } else if (matchPlays[opponentHand] === playerHand) {
          winner = 'opponent';
        }
        return { payload: { playerHand, winner, opponentHand } };
      },
    },
  },
});

export const selectGameScore = (state: RootState) => state.gameScore.score;

export const selectNumberOfMatches = (state: RootState) =>
  state.gameScore.numberOfMatches;

export const selectResultMessage = (state: RootState) =>
  state.gameScore.resultMessage;

export const selectLastPlays = (state: RootState) => state.gameScore.lastHand;

export const { validateScore, restartGame } = gameScoreSlice.actions;

export default gameScoreSlice.reducer;
