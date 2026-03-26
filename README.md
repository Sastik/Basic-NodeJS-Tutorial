# 🚀 Basic Node.js Tutorial

💡 A beginner-friendly repository to learn **Node.js fundamentals**, core concepts, and backend basics in a simple and structured way.

---

## ✨ About Node.js

🟢 Node.js is a **JavaScript runtime** built on Chrome's **V8 engine**
🟢 It allows JavaScript to run **outside the browser (server-side)**
🟢 Used to build **fast, scalable network applications**

---

## 📜 History

In **2009**, **Ryan Dahl** created Node.js with the idea:

> “Why not run JavaScript outside the browser?”

He used the **V8 Engine (C++)** to execute JavaScript on the server — and Node.js was born 🚀

---

## ⚙️ V8 Engine

* JavaScript engine developed by Chrome
* Converts JavaScript into **machine code**
* Other engines:

  * Firefox → SpiderMonkey
  * Edge → Chakra

---

## 🎯 Where Node.js is Used

* ⚡ I/O bound applications
* 📡 Real-time chat apps
* 📊 Data streaming apps
* 🌐 APIs & backend services

---

## 🛠️ Installation

### Step 1:

Download Node.js
👉 https://nodejs.org/en/download/

### Step 2:

Install it

### Step 3:

Verify installation

```bash
node -v
npm -v
```

---

## 📦 NPM (Node Package Manager)

* 📚 Largest software registry in the world
* 📥 Install packages easily
* ⚙️ Manage dependencies

### Example:

```bash
npm install express
```

---

## 🧠 ES6 (Modern JavaScript)

* Introduced in **2015**
* Adds features like:

  * Arrow functions ➡️
  * let / const
  * Promises
  * Modules

---

## 💻 REPL (Read Eval Print Loop)

Node.js provides an interactive shell:

* **R** → Read input
* **E** → Evaluate
* **P** → Print output
* **L** → Loop

### Features:

* Run JS expressions
* Use variables
* Multiline code
* `_` → last result

---

## 🧰 Useful REPL Commands

```bash
.help       # Show help
.editor     # Enter editor mode
```

---

## 📦 Core Modules

Node.js provides built-in modules:

* `fs` → File system
* `http` → Web server
* `path` → File paths
* `events` → Event handling

---

## 🌐 Creating a Web Server

Node.js can create its own web server:

```js
const http = require('http');

http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
}).listen(3000);
```

---

## 📄 JSON

* Lightweight data format
* Used for **data exchange**
* Common in APIs

---

## 🔌 API (Application Programming Interface)

* Allows communication between applications
* Used in:

  * Web apps
  * Mobile apps
  * Services

---

## ⚡ Event Module

Node.js is **event-driven**

```js
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayHello', () => {
  console.log('Hello World!');
});

event.emit('sayHello');
```

---

## 🌊 Streams in Node.js

Streams handle data efficiently:

1. Readable
2. Writable
3. Duplex
4. Transform

👉 Used in real-time processing (video, audio, etc.)

---

## ⌨️ Terminal Commands

```bash
ctrl + `        # Open terminal
dir             # List files
cd ..           # Go back
mkdir folder    # Create folder
node app.js     # Run file
nodemon app.js  # Auto restart server
```

---

## 🎯 Purpose of This Repo

This project was created to:

* Learn Node.js fundamentals
* Understand backend development basics
* Build a strong foundation for full-stack development

---

## 🚀 Future Improvements

* Add Express.js examples
* Add REST API projects
* Add MongoDB integration
* Convert into full backend course

---

## ⚡ Note

> This repository reflects my early journey into backend development using Node.js.

---

## 🙌 Author

**Sastik Kumar Das**

---

## ⭐ Support

If you find this helpful, give it a ⭐ on GitHub!
