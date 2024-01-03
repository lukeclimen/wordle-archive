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

  it('Adds guesses into the list and tracks game-loss state', () => {
    const testStore = useGameStore();
    testStore.wordOfTheDay = 'click';

    const guessList = ['track', 'while', 'audio', 'crane', 'sound', 'teary'];
    const guessTrackList = ['', '', '', '', '', ''];

    // Initial state
    expect(testStore.getGuessList).toStrictEqual(guessTrackList);

    // Add guesses
    guessList.forEach((guess, index) => {
      // Check if the player has lost the game
      expect(testStore.getLostGame).toBe(false);

      // Add guess to state and check it against 'click'
      testStore.addLetterToGuess(guess);
      testStore.checkGuess();

      // Reflect proper behaviour with guessTrackList
      guessTrackList[index] = guess;

      // Compare guessList in state to proper behaviour
      expect(testStore.getGuessList).toStrictEqual(guessTrackList);
    });

    // After 6 guesses, the player should have lost the game
    expect(testStore.getLostGame).toBe(true);
  });
});
