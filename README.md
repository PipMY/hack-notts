# TEAM 61 - REVELATION 23
## Hack Notts
Perfect 👍 Here’s a **filled-in first draft** of the README for your game, based on everything we’ve discussed so far — your cult-murder investigation aesthetic, the chat simulation, randomised short typing times, realistic timestamps, custom grey scrollbar, and vintage typography.

---

# 🩸 **The Cult Line**

> *“They said the chat was deleted. But someone’s still typing…”*

---

## 🎮 Overview

**The Cult Line** is an interactive mystery experience built with **React**, blending investigative storytelling with a simulated chat interface.
Players uncover the truth behind a **series of ritualistic murders** by observing a corrupted message feed between cult members and investigators.
The story unfolds in real time — with **randomised, fast message delays**, **accurate timestamps**, and a distinctive, unsettling aesthetic that evokes early-2000s chat logs and classified police files.

---

## 🧩 Core Features

* 💬 **Dynamic Chat Simulation** — Realistic typing sequences with randomised short delays that create an immersive sense of “live” messaging.
* 🕒 **Authentic Timestamps** — Each line updates with a realistic timestamp that increments throughout the conversation.
* 🧑‍💻 **Join Button** — A subtle interactive element appears at the end of sequences to advance or restart.
* 🎨 **Custom Aesthetic** —

  * Vintage **grunge paper background** texture
  * **IM Fell English** font for an archaic, eerie tone
  * **Grey custom scrollbar** to fit the muted, investigative theme
  * Occasional **red text** for corrupted or urgent transmissions
* ⚙️ **Modular Sequence Control** — Message sets are defined in JSON-like structures, easily editable for new scenes or branches.
* 🎭 **Atmospheric Storytelling** — The narrative unfolds purely through dialogue and digital traces — no exposition, only discovery.

---

## 🧠 Gameplay Concept

* **Genre:** Psychological Horror / Mystery
* **Perspective:** Observer — you are monitoring a live data feed or private group chat.
* **Goal:** Piece together the truth behind a cult’s last conversation before the murder night.
* **Player Interaction:** Mostly passive observation with occasional progression inputs (e.g., “Join” button or next sequence triggers).

---

## 🧰 Tech Stack

| Technology                      | Purpose                                    |
| ------------------------------- | ------------------------------------------ |
| **React**                       | Frontend framework                         |
| **Tailwind CSS**                | Styling and responsive layout              |
| **Framer Motion**               | Smooth fade/slide animations for messages  |
| **Lucide Icons**                | Minimal UI icons (e.g. status, indicators) |
| **ShadCN UI**                   | Button and layout components               |
| **@fontsource/im-fell-english** | Font import for vintage feel               |
| **Vite**                        | Lightweight build and dev server           |

---

## 🧾 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<yourusername>/the-cult-line.git
   cd the-cult-line
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173) to view the game.

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

---

## 🎨 Customisation

You can adjust pacing, visuals, and message styling from these files:

| File                              | Purpose                                                   |
| --------------------------------- | --------------------------------------------------------- |
| `src/components/ChatSequence.jsx` | Controls timing, message flow, and message content        |
| `src/components/Message.jsx`      | Handles typing animation and timestamps                   |
| `src/index.css`                   | Tailwind configuration, background texture, and scrollbar |
| `src/assets/`                     | Contains background images and audio (if used)            |

**Typing Speed Config Example:**

```js
const minDelay = 100; // shortest delay in ms
const maxDelay = 300; // longest delay in ms
```

**Scrollbar Style (index.css):**

```css
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #666;
}
```

---

## 📜 Narrative Structure

| Chapter                       | Description                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| **Prologue – The Deletion**   | You access the chat logs hours after the incident. The first messages are fragmented. |
| **Chapter 1 – The Gathering** | Cult members discuss the upcoming “ceremony.” Tone shifts from devotion to paranoia.  |
| **Chapter 2 – The Watcher**   | A new user joins the chat. The timestamps start to drift. Someone is observing.       |
| **Chapter 3 – The Red Room**  | The background darkens; messages become corrupted. The truth begins to surface.       |
| **Ending – Disconnect**       | All users vanish from the chat. You’re prompted to “join” the final transmission.     |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── grunge-paper-background.jpg
│   └── ...
├── components/
│   ├── ChatSequence.jsx
│   ├── Message.jsx
│   ├── JoinButton.jsx
│   └── ...
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🧪 Future Enhancements

* [ ] Branching dialogue / multiple endings
* [ ] Subtle ambient audio and typing sounds
* [ ] Mobile layout optimisation
* [ ] Session save / “resume from last chat” feature
* [ ] Message corruption animation (glitch text, fading logs)

---

## 🩸 Credits

**Created by:** Pip Martin-Yates, Jom Joby and Emily Ball
**Writing & Concept:** Pip Martin-Yates, Jom Joby and Emily Ball
**Design:** Pip Martin-Yates, Jom Joby and Emily Ball
**Programming:** Pip Martin-Yates, Jom Joby and Emily Ball
**Special Thanks:** Thank you to all of the amazing organisers and volunteers at HackNotts 2025, it has been an incredible experience to have the time and support to make such a project.

---

## ⚠️ Disclaimer

> This work is a piece of fiction inspired by online folklore and investigative storytelling.
> It contains dark themes and psychological horror elements.
> Viewer discretion is advised.

