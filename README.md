# Cosha: Your AI Ultimate Buddy 🤖⚡

#### Revolutionize your development workflow with Cosha, your ultimate AI coding companion. Cosha seamlessly integrates with your environment, offering real-time collaboration, intuitive code comprehension, and insightful analytics.

## Features

### 1. Real-time AI Code Editor:

Edit code directly within Cosha and effortlessly push changes to your GitHub repositories.

### 2. Ask Your Repo Feature:

Ask natural language questions about your entire codebase. Cosha will provide relevant information and insights, eliminating the need to sift through code yourself.

### 3. Real-time Analytics:

Get immediate insights into your code's health. Cosha continuously analyzes your codebase, identifying potential issues and suggesting improvements.

### 4. Collaborative Chat:

Engage in a conversation with your code directly within Cosha. Ask questions, seek clarifications, and receive AI-generated responses tailored to your specific code.

## Benefits:

### Supercharged Developer Experience:

Streamline your workflow, reduce cognitive load, and boost your productivity.

### Open Source Nature:

Cosha's open-source nature fosters transparency and allows for easier understanding of how open-source contributions are made, empowering developers to learn and contribute efficiently.

### Effortless Code Maintenance:

Break down complex code into smaller, more manageable components for easier maintenance and debugging.

### Enhanced Collaboration:

Facilitate seamless collaboration with your team through real-time code editing and in-app chat.

### Enhanced Code Understanding:

Gain deeper insights into your codebase, identify potential issues, and improve code quality.

## What makes Cosha unique?

### Context-Free Understanding:

Unlike AI code helper apps such as Copilot, Cosha doesn't require specific file context. It can understand and analyze your entire codebase using natural language processing.

### "Ask Your Repo" Feature:

Cosha offers a unique "Ask Your Repo" feature, enabling natural language interaction with your codebase for a more intuitive exploration and understanding.

### Activity Tracking:

Cosha continuously monitors your code, offering valuable insights and suggestions for improvement.

## Future Addons:

#### Cosha's future includes expanding its capabilities to platforms like LeetCode and CodeChef, providing AI-powered assistance for competitive programming, code challenges, and learning and addition of an AI-powered Eraser.io feature in the future which helps gain a deeper understanding of your code structure with Cosha's AI-powered visualizer. It generates a pictorial representation, making complex code easier to grasp.

## Requirements

- text editor (vscode or cursor)
- node.js (version 14 or higher)
- npm (or Yarn)
- typescript
- docker

## Installation

### Clone the repository:

```bash
git clone https://github.com/Abdus-Samee-007/Cosha-Ultimate-Buddy
cd Cosha-Ultimate-Buddy
```

### Run Using Docker

Copy .env.sample file into .env and add values then run

```bash
docker-compose up -d
```

### Run Manually

1. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

2. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

3. Install websocket dependencies:

   ```bash
   cd websocket
   npm install
   ```

4. Navigate to the server directory:

   ```bash
   cd server
   npm run dev
   ```

5. Navigate to the websocket directory:

   ```bash
   cd websocket
   npm run dev
   ```

6. Start the client server:

   ```bash
   cd client
   npm run dev
   ```

   The server should now be running on http://localhost:8000 (or the port you specified in your configuration).

   The websocket server should now be running on http://localhost:8080 (or the port you specified in your configuration).

   The client should now be running on http://localhost:3080 (or the port you specified in your configuration).
