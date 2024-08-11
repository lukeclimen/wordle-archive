import { defineStore } from 'pinia';
import {
  searchForAcceptableGuess,
  guessWordLetterPlacement
} from '../utils/UtilFunctions.js';
import axios from 'axios';

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
      wrongGuessLetters: [],
      guessWordsLetterPlacementArray: []
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
    },
    getGuessWordsLetterPlacementArray(state) {
      return state.guessWordsLetterPlacementArray;
    }
  },
  actions: {
    async fetchWordOfTheDay(date) {
      // TODO: Add fetch request once an endpoint is created
      // Currently only mocking the request and using "CLICK"
      const wordOfTheDayUrl = import.meta.env['VITE_BACKEND_ENDPOINT'] + '/get-wordle';
      await axios
        .get(wordOfTheDayUrl, { params: { selected_date: date } })
        .then((response) => {
          if (response.status === 200) {
            if (response.data['selected_date'] === date) {
              this.wordOfTheDay = response.data['word'];
            } else {
              // TODO: Handle local time zone vs UTC miscommunications
              console.log(
                `Returned date: ${response.data['selected_date']}, Attempted date: ${date}`
              );
            }
          } else if (response.status === 204) {
            // TODO: Handle local time zone vs UTC miscommunications
            console.log("Need to retry with previous day's word of the day");
          }
        })
        .catch((error) => console.log(error));
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
        this.addGuessWordLetterPlacement();
        this.addGuessWord(this.currentGuessWord.toLocaleLowerCase());
        // This sets the game as over (and lost is false)
        this.setGameEnded();
        return true;
      } else if (!this.checkForFullWord) {
        // If the user hits enter without a full word as a guess
        return;
      } else {
        // Otherwise, a full word guess that isn't correct
        this.addGuessWordLetterPlacement();
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
    },
    addGuessWordLetterPlacement() {
      const newGuessLetterPlacement = guessWordLetterPlacement(
        this.currentGuessWord.toLocaleLowerCase(),
        this.wordOfTheDay
      );
      this.guessWordsLetterPlacementArray.push(newGuessLetterPlacement);
      newGuessLetterPlacement.forEach((letterPlacement, index) => {
        if (letterPlacement === 'correctPosition') {
          this.addCorrectLetter(this.currentGuessWord[index]);
        } else if (letterPlacement === 'wrongPosition') {
          this.addWrongPositionLetter(this.currentGuessWord[index]);
        } else {
          this.addWrongGuessLetter(this.currentGuessWord[index]);
        }
      });
    }
  }
});
