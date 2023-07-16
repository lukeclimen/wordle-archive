import { defineStore } from 'pinia';

export const useGameStore = defineStore('Game Store', {
  state: () => {
    return {
      wordOfTheDay: '',
      isLoading: false,
      isErrored: false,
      errorMessage: null,
      guessList: ['', '', '', '', '', ''],
      amountOfGuesses: 0,
      currentGuessWord: ''
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
      return state.amountOfGuesses >= 6;
    },
    getCurrentGuessWord(state) {
      return state.currentGuessWord;
    }
  },
  actions: {
    fetchWordOfTheDay() {
      // TODO: Add fetch request once an endpoint is created
      // Currently only mocking the request and using "CLICK"
      this.wordOfTheDay = 'click'.toLocaleLowerCase();
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
      this.amountOfGuesses++;
    },
    checkGuess() {
      // TODO: Add legal word check
      if (
        this.currentGuessWord.length === 5 &&
        this.wordOfTheDay === this.currentGuessWord.toLocaleLowerCase()
      ) {
        return true;
      } else {
        this.addGuessWord(this.currentGuessWord.toLocaleLowerCase());
        this.guessWord = '';
        return false;
      }
    },
    addLetterToGuess(letter) {
      if (this.currentGuessWord.length < 5) {
        this.currentGuessWord = this.currentGuessWord.concat(letter.toLocaleLowerCase());
      }
    },
    removeLetterFromGuess() {
      if (this.currentGuessWord.length > 0) {
        const numberOfLetters = this.currentGuessWord.length;
        this.currentGuessWord = '';
        this.currentGuessWord.substring(0, numberOfLetters - 1);
      }
    }
  }
});
