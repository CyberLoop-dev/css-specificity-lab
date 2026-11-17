<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%23f472b6&height=170&section=header&text=CSS%20Specificity%20Lab&fontSize=40&fontColor=ffffff" alt="CSS Specificity Lab banner"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&pause=1000&color=f472b6&center=true&vCenter=true&width=650&lines=Understand%20why%20one%20CSS%20selector%20wins" alt="Typing title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/css-specificity-lab"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/css-specificity-lab"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/css-specificity-lab"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/css-specificity-lab"/></p>
<p align="center"><img src="assets/overview.svg" alt="CSS Specificity Lab illustration" width="92%"/></p>

## 🧭 Overview
CSS Specificity Lab explains the ID, class, and type components of a selector and compares two selectors lexicographically. It runs locally and does not contact external services.

## ✨ Features
- 🎯 Calculates specificity as (IDs, classes, types).
- 🧩 Handles :where(), :is(), :not(), and :has() using their specificity rules.
- ⚖️ Compares two selectors and explains the winner.
- 🔒 Runs in your browser with a tiny Node.js static server.

## 🎬 Demo
```text
Selector A: #app .card h2  →  (1, 1, 1)
Selector B: main .card h2   →  (0, 1, 2)
Winner: Selector A
```
The example runs locally; no hosted service is required.

## 🚀 Quick Start
```bash
npm install
npm start
```
Open the local address printed by the server (default: http://127.0.0.1:4173).

## 🧰 Tech Stack
- Node.js 18+
- HTML, CSS, and browser JavaScript
- Node's built-in test runner

## 🗂️ Folder Structure
```text
server.js
public/index.html
public/app.js
public/specificity.js
public/styles.css
tests/specificity.test.js
package.json
assets/overview.svg
```

## 🗺️ Roadmap
- [x] Core local workflow
- [x] Documented interface
- [ ] Broader edge-case coverage
- [ ] Optional CI examples

## 🤝 Contributing
Issues and focused pull requests are welcome. Add regression tests for bug fixes and document new behavior.

## 📄 License
Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%23f472b6&height=110&section=footer" alt="Animated footer"/></p>
