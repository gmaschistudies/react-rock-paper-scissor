import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';
// eslint-disable-next-line import/no-cycle
import GameScoreSlice from '@/presentation/store/features/game-score/GameScore';

export const store = configureStore({
  reducer: {
    l10n: L10nSlice,
    gameScore: GameScoreSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
