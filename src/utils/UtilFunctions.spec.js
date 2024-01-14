import { describe, expect, it } from 'vitest';
import {
  searchForAcceptableGuess,
  randomlySelectedWordOfTheDay,
  guessWordLetterPlacement
} from './UtilFunctions';

describe('Guess Array Search function', () => {
  it('Finds words that exist in the array', () => {
    const existingWords = [
      'aglow',
      'cigar',
      'above',
      'weary',
      'shore',
      'cloud',
      'about',
      'query',
      'sound',
      'crane'
    ];

    existingWords.forEach((word) => {
      const result = searchForAcceptableGuess(word);
      expect(result).toStrictEqual(true);
    });
  });

  it("Rejects words that don't exist in the array", () => {
    const nonExistantWords = [
      'archive',
      'winner',
      'champion',
      'testing',
      'friend',
      'bicycle',
      'jackson',
      'volley',
      'quaker',
      'willow'
    ];

    nonExistantWords.forEach((word) => {
      const result = searchForAcceptableGuess(word);
      expect(result).toStrictEqual(false);
    });
  });

  it('Finds words at the edge of the array', () => {
    const edgeWords = [
      'aahed',
      'aalii',
      'aargh',
      'aarti',
      'abaca',
      'zurfs',
      'zuzim',
      'zygal',
      'zygon',
      'zymes',
      'zymic'
    ];

    edgeWords.forEach((word) => {
      const result = searchForAcceptableGuess(word);
      expect(result).toStrictEqual(true);
    });
  });
});

describe('Random Word of the Day Function', () => {
  it('Correctly gets a word', () => {
    const result = randomlySelectedWordOfTheDay();
    expect(typeof result).toBe('string');
  });
});

describe('Guess-word Letter Placement Function', () => {
  it('Correctly handles multiples of the same letter in the guess', () => {
    const testWordsOfTheDay = ['there', 'there', 'fluff'];
    const testGuessWords = ['weary', 'cheer', 'proof'];
    const expectedResultArrays = [
      // Comparing 'there' to 'weary'
      ['notInWord', 'notInWord', 'wrongPosition', 'correctPosition', 'notInWord'],
      // Comparing 'there' to 'cheer'
      [
        'notInWord',
        'correctPosition',
        'correctPosition',
        'wrongPosition',
        'wrongPosition'
      ],
      // Comparing 'fluff' to 'proof'
      ['noInWord', 'notInWord', 'notInWord', 'notInWord', 'correctPosition']
    ];

    testWordsOfTheDay.forEach((_, index) => {
      const result = guessWordLetterPlacement(
        testGuessWords[index],
        testWordsOfTheDay[index]
      );
      expect(result).toBe(expectedResultArrays[index]);
    });
  });
});
