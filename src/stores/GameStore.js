import { defineStore } from 'pinia';
import { randomlySelectedWordOfTheDay } from '../utils/UtilFunctions.js';
import { searchForAcceptableGuess } from '../utils/UtilFunctions';

export const useGameStore = defineStore('Game Store', {
  state: () => {
    return {
      wordOfTheDay: '',
      gameEnded: false,
      gameLost: false,
      isLoading: false,
      isErrored: false,
      errorMessage: null,
      guessList: ['', '', '', '', '', ''],
      amountOfGuesses: 0,
      currentGuessWord: '',
      correctLetters: [],
      wrongPositionLetters: [],
      wrongGuessLetters: []
    };
  },
  getters: {
    getWordOfTheDay(state) {
      return state.wordOfTheDay;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getIsErrored(state) {
      return state.isErrored;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
    getGuessList(state) {
      return state.guessList;
    },
    getGuessCount(state) {
      return state.amountOfGuesses;
    },
    getLostGame(state) {
      return state.gameLost;
    },
    getCurrentGuessWord(state) {
      return state.currentGuessWord;
    },
    checkForFullWord(state) {
      return state.currentGuessWord.length === 5;
    },
    getCorrectLetterArray(state) {
      return state.correctLetters;
    },
    getwrongPositionLetterArray(state) {
      return state.wrongPositionLetters;
    },
    getwrongGuessLetterArray(state) {
      return state.wrongGuessLetters;
    },
    getGameEnded(state) {
      return state.gameEnded;
    }
  },
  actions: {
    fetchWordOfTheDay() {
      // TODO: Add fetch request once an endpoint is created
      // Currently only mocking the request and using "CLICK"
      this.wordOfTheDay = randomlySelectedWordOfTheDay();
    },
    setLoading() {
      this.isLoading = true;
    },
    setLoadingCompleted() {
      this.isLoading = false;
    },
    setErrored(message) {
      this.isErrored = true;
      this.errorMessage = message;
    },
    clearError() {
      this.isErrored = false;
      this.errorMessage = null;
    },
    addGuessWord(guessWord) {
      this.guessList[this.amountOfGuesses] = guessWord;
      this.incrementGuessCount();
      this.currentGuessWord = '';
    },
    checkGuess() {
      if (this.getGuessCount >= 6) {
        // If the user tries entering another guess after the end of the game
        this.setGameLost();
        return false;
      }
      if (this.wordOfTheDay === this.currentGuessWord.toLocaleLowerCase()) {
        // If the guess was correct
        const correctWordArray = this.wordOfTheDay.split('');
        correctWordArray.forEach((letter) => {
          this.addCorrectLetter(letter);
          this.removeWrongPositionLetter(letter);
        });
        this.addGuessWord(this.currentGuessWord.toLocaleLowerCase());
        // This sets the game as over (and lost is false)
        this.setGameEnded();
        return true;
      } else if (!this.checkForFullWord) {
        // If the user hits enter without a full word as a guess
        return;
      } else {
        // Otherwise, a full word guess that isn't correct
        const incorrectWordArray = this.currentGuessWord.split('');
        incorrectWordArray.forEach((letter, index) => {
          if (this.wordOfTheDay.includes(letter)) {
            if (this.wordOfTheDay[index] === letter) {
              this.addCorrectLetter(letter);
            } else {
              this.addWrongPositionLetter(letter);
            }
          } else {
            this.addWrongGuessLetter(letter);
          }
        });
        this.addGuessWord(this.currentGuessWord.toLocaleLowerCase());
        this.currentGuessWord = '';
        return false;
      }
    },
    addLetterToGuess(letter) {
      if (!this.checkForFullWord) {
        this.currentGuessWord = this.currentGuessWord.concat(letter.toLocaleLowerCase());
      }
    },
    removeLetterFromGuess() {
      if (this.currentGuessWord.length > 0) {
        const numberOfLetters = this.currentGuessWord.length;
        this.currentGuessWord = this.currentGuessWord.substring(0, numberOfLetters - 1);
      }
    },
    addCorrectLetter(letter) {
      if (!this.correctLetters.includes(letter)) this.correctLetters.push(letter);
    },
    addWrongPositionLetter(letter) {
      if (!this.wrongPositionLetters.includes(letter))
        this.wrongPositionLetters.push(letter);
    },
    addWrongGuessLetter(letter) {
      if (!this.wrongGuessLetters.includes(letter)) this.wrongGuessLetters.push(letter);
    },
    removeWrongPositionLetter(letter) {
      if (this.wrongPositionLetters.includes(letter)) {
        const indexOfLetter = this.wrongPositionLetters.indexOf(letter);
        this.wrongPositionLetters.splice(indexOfLetter, 1);
      }
    },
    setGameLost() {
      this.gameLost = true;
      this.setGameEnded();
    },
    setGameEnded() {
      this.gameEnded = true;
    },
    incrementGuessCount() {
      if (this.amountOfGuesses >= 6) {
        this.setGameLost();
      }
      this.amountOfGuesses++;
    },
    validateGuessWord() {
      return searchForAcceptableGuess(this.currentGuessWord);
    }
  }
});
