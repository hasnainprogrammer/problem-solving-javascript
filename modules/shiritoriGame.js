/*
PROBLEM: This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
    - First character of next word must match last character of previous word.
    - The word must not have already been said.
- Write a Shiritori class that has two instance properties:
    words: an array of words already said.
    game_over: a boolean that is true if the game is over.
    and two instance methods:
        play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).
            If it is valid, it adds the word to the words array, and returns the words array.
            If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
        restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".
*/

class Shiritori {
  // create two instance properties: words and gameOver
  constructor() {
    this.words = [];
    this.gameOver = false;
  }

  // create a play method that takes in a word as an argument
  play(word) {
    // if there is no words in the array
    if (!this.words.length) {
      this.words.push(word);
      return this.words;
    }

    const previousWord = this.words.at(-1);
    const lastCharacter = previousWord.at(-1);
    // If it is valid, it adds the word to the words array, and returns the words array
    if (word.at(0) === lastCharacter && !this.words.includes(word)) {
      this.words.push(word);
      return this.words;
    } else {
      // If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
      self.gameOver = true;
      return "game over";
    }
  }

  // restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted"
  restart() {
    this.words = [];
    this.gameOver = false;

    return "game restarted";
  }
}

const myShiritori = new Shiritori();

const runShiritori = () => {
  console.log(myShiritori.play("apple"));
  console.log(myShiritori.play("ear"));
  console.log(myShiritori.play("rhino"));
  console.log(myShiritori.play("corn"));
  console.log(myShiritori.words);
  console.log(myShiritori.restart());
  console.log(myShiritori.words);
  console.log(myShiritori.play("hostess"));
  console.log(myShiritori.play("stash"));
  console.log(myShiritori.play("hostess"));
};
export { runShiritori };
