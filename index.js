const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "75°C", "100°C", "150°C"],
    answer: "100°C",
  },
];

// API route to get a random question
app.get("/quiz", (req, res) => {
  const randomQuestion =
    quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  res.json(randomQuestion);
});

// Default route
app.get("/", (req, res) => {
  res.send("Server is running. Use /quiz to get a question.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
