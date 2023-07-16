import { setActivePinia, createPinia } from 'pinia';
import { useGameStore } from './GameStore';
import { beforeEach, describe, it, expect } from 'vitest';

describe('Game Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Handles adding and removing letters from a guess', () => {
    const testStore = useGameStore();

    // Initial state empty
    expect(testStore.getCurrentGuessWord).toBe('');

    // Successful add
    testStore.addLetterToGuess('a');
    expect(testStore.getCurrentGuessWord).toBe('a');

    // Successful remove
    testStore.removeLetterFromGuess();
    expect(testStore.getCurrentGuessWord).toBe('');

    // Test adding more than 5 letters
    const stringArray = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    for (const letter of stringArray) {
      testStore.addLetterToGuess(letter);
    }
    expect(testStore.getCurrentGuessWord).toBe('asdfg');

    // Test removing more than 5 letters
    for (let i = 0; i < 10; i++) {
      testStore.removeLetterFromGuess();
    }
    expect(testStore.getCurrentGuessWord).toBe('');
  });
  it('Compares the guess word against the answer', () => {
    const testStore = useGameStore();

    // Test incorrect guess
    testStore.wordOfTheDay = 'click';
    testStore.currentGuessWord = 'track';
    expect(testStore.checkGuess()).toBe(false);

    // Test correct guess
    testStore.currentGuessWord = 'click';
    expect(testStore.checkGuess()).toBe(true);
  });
});
