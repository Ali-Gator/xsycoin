export interface BalanceSlice {
  id?: number; // db id
  staticBalance: number; // balance before new session of farming started
  balanceUpdatedAt: number; // timestamp when staticBalance was updated

  currentBalance: number; // recalculated balance based on staticBalance and time passed since balanceUpdatedAt

  tokenGain: number; // token gain per 1 energy

  staticEnergyLevel: number; // energy level before new session of farming started
  energyLevelUpdatedAt: number; // timestamp when staticEnergyLevel was updated
  currentEnergyLevel: number; // current energy level
  energyCapacity: number; // max energy capacity; default = 1000

  addToBalance: (increment: number) => void;
  removeFromBalance: (increment: number) => void;
  getPotentialIncome: () => number;
  addEnergy: (increment: number) => void;
  refillEnergy: () => void;
  fetchBalance: (telegramId: string) => Promise<void>;
  updateBalance: () => void;
}
