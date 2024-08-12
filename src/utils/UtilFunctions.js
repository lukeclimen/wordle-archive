import { acceptableGuessList, wordOfTheDayList } from './UtilArrays';

export const generateGameCopy = async (wordOfTheDay, guessCount, guessList) => {
  let gameCopy = '';
  for (let i = 0; i < guessCount; i++) {
    const guess = guessList[i];
    const guessLetterArray = guess.split('');
    guessLetterArray.forEach((letter, index) => {
      if (wordOfTheDay.includes(letter)) {
        if (wordOfTheDay[index] === letter) {
          gameCopy += '🟩';
        } else {
          gameCopy += '🟨';
        }
      } else {
        gameCopy += '⬜';
      }
    });
    gameCopy += '\n';
  }

  try {
    await navigator.clipboard.writeText(gameCopy);
  } catch (error) {
    console.error(error.name, error.message);
  }
};

export const searchForAcceptableGuess = (guess) => {
  let bottomBound = 0;
  let topBound = acceptableGuessList.length - 1;
  let currentIndex = Math.floor((topBound + bottomBound) / 2);

  while (currentIndex > bottomBound && currentIndex < topBound) {
    if (
      guess.localeCompare(acceptableGuessList[currentIndex]) === 0 ||
      guess.localeCompare(acceptableGuessList[bottomBound]) === 0 ||
      guess.localeCompare(acceptableGuessList[topBound]) === 0
    ) {
      return true;
    }
    if (guess.localeCompare(acceptableGuessList[currentIndex]) > 0) {
      bottomBound = currentIndex;
    } else {
      topBound = currentIndex;
    }
    currentIndex = Math.floor((topBound + bottomBound) / 2);
  }

  // If we got to this point, the guess is not in the list
  return false;
};

export const randomlySelectedWordOfTheDay = () => {
  const maxIndex = wordOfTheDayList.length - 1;
  const randomIndex = Math.floor(Math.random() * maxIndex);
  return wordOfTheDayList[randomIndex];
};

/**
 * Determines the correct label for each letter in a guess
 *
 * Given a guess word and the word of the day, returns an array
 * containing 'correctPosition', 'wrongPosition', or 'notInWord'
 * for each letter in the guess word.
 *
 * @param {String} guessWord [Guess word]
 * @param {String} wordOfTheDay [Word of the day]
 * @returns {String[]} [Array of letter guess results]
 */
export const guessWordLetterPlacement = (guessWord, wordOfTheDay) => {
  // This function iterates through each array once, so it has O(n) time efficiency
  const alphabetMap = new Map();
  const guessLetterPlacementArray = [];

  // Iterate through WOTD, assigning correctPosition and storing remainders in map
  wordOfTheDay.split('').forEach((letter, index) => {
    if (letter === guessWord[index]) {
      guessLetterPlacementArray[index] = 'correctPosition';
    } else {
      if (alphabetMap.has(letter)) {
        alphabetMap.set(letter, alphabetMap.get(letter) + 1);
      } else {
        alphabetMap.set(letter, 1);
      }
    }
  });

  // Iterate through guess, assigning wrongPosition if in map, notInWord otherwise
  guessWord.split('').forEach((letter, index) => {
    if (guessLetterPlacementArray[index] === 'correctPosition') {
      return;
    }
    if (alphabetMap.has(letter) && alphabetMap.get(letter) > 0) {
      guessLetterPlacementArray[index] = 'wrongPosition';
      alphabetMap.set(letter, alphabetMap.get(letter) - 1);
    } else {
      guessLetterPlacementArray[index] = 'notInWord';
    }
  });
  return guessLetterPlacementArray;
};

/**
 * Formats a JS Date object into a string for the API
 *
 * @param {Date} date
 * @returns {String} Stringified date of format YYYY-MM-DD
 */
export const formatDateForApi = (date) => {
  console.log(date);
  const dateYear = date.getFullYear();
  console.log(dateYear);
  const dateMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const dateDay = date.getDate().toString().padStart(2, '0');
  console.log(dateDay);
  return `${dateYear}-${dateMonth}-${dateDay}`;
};
