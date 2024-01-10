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
    console.log('trying to copy to clipboard');
    await navigator.clipboard.writeText(gameCopy);
    console.log('Copied to clipboard');
  } catch (error) {
    console.error(error.name, error.message);
  }
};
