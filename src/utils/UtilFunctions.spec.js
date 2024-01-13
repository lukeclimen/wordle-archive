import { describe, expect, it } from 'vitest';
import { searchForAcceptableGuess, randomlySelectedWordOfTheDay } from './UtilFunctions';

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
