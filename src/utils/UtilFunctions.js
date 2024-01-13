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
