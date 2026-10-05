# 🎮 Rock Paper Scissors

A simple and interactive **Rock Paper Scissors** web game built using **HTML, CSS, and JavaScript**.

The player competes against the computer for **5 rounds**, with the scores tracked throughout the match. After the fifth round, the game announces the overall winner.

## 🚀 Live Demo

[View Live Demo](https://rock-paper-scissors-game-psi-amber.vercel.app/)

## ✨ Features

- 🪨 Rock, 📄 Paper, and ✂️ Scissors choices
- 🤖 Computer generates a random choice
- 🎯 5-round match system
- 🏆 Automatic match winner calculation
- 📊 Real-time score tracking
- 🔄 Reset game functionality
- 💬 Displays the result of every round
- 🎨 Simple and interactive user interface
- 📱 Responsive design

## 🕹️ How to Play

1. Choose **Rock**, **Paper**, or **Scissors**.
2. The computer randomly selects its choice.
3. The winner of the round is determined using the standard rules:
   - 🪨 Rock beats ✂️ Scissors
   - 📄 Paper beats 🪨 Rock
   - ✂️ Scissors beats 📄 Paper
4. The score is updated after every round.
5. The game continues for **5 rounds**.
6. After 5 rounds, the player with the higher score wins the match.
7. Click **Reset** to start a new match.

## 🛠️ Technologies Used

- **HTML5** — Structure of the web page
- **CSS3** — Styling and layout
- **JavaScript (ES6)** — Game logic, DOM manipulation, event handling, and random computer choices

## 📂 Project Structure

```text
rock-paper-scissors/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧠 JavaScript Concepts Used

This project helped practice several important JavaScript concepts:

- `querySelector()` and `querySelectorAll()`
- DOM manipulation
- Event listeners
- `forEach()`
- Functions
- Conditional statements
- `Math.random()`
- Variables and state management
- Updating HTML elements using `innerText`
- Game logic
- Score tracking
- Reset functionality

## ⚙️ Game Logic

The computer's choice is generated using `Math.random()`.

```javascript
let random = Math.random() * 10;

if(random <= 3){
    computerChoice = '✊';
}else if(random <= 6){
    computerChoice = '✋';
}else{
    computerChoice = '✌️';
}
```

The game then compares the player's choice with the computer's choice to determine the winner.

## 🏁 Match Rules

| Result | Score |
|---|---|
| Player wins a round | Player +1 |
| Computer wins a round | Computer +1 |
| Tie | No points |
| After 5 rounds | Match winner is declared |

## 🔄 Reset

The **Reset** button resets:

- Player score → `0`
- Computer score → `0`
- Round number → `0`
- Player choice → `?`
- Computer choice → `?`
- Result message → Starting message

## 🚀 Running the Project

No installation or dependencies are required.

Simply clone the repository:

```bash
git clone <(https://github.com/mani2643/Rock-paper-scissors-game.git)>
```

Then open `index.html` in your browser.

You can also use **VS Code + Live Server** for development.

## 📸 Preview

Add a screenshot of your game here:

```markdown
![Rock Paper Scissors Preview](./preview.png)
```

## 🔮 Future Improvements

Some possible improvements for future versions:

- Add sound effects
- Add animations for each round
- Add a countdown before each round
- Add difficulty levels
- Store high scores using `localStorage`
- Add player names
- Add different match modes such as Best of 3 / Best of 5
- Add a game history showing previous rounds
- Improve mobile responsiveness

## 👨‍💻 Author

**Bharath**

Built as a JavaScript practice project to strengthen DOM manipulation, event handling, conditional logic, and state management.

---

⭐ If you like this project, consider giving the repository a star!
