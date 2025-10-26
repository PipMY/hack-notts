Excellent draft — it’s already clear and professional.
Below is a **corrected and polished version** with spelling fixes, formatting consistency, and minor grammar/stylistic improvements.
I also cleaned the install instructions, added missing punctuation, corrected your repository link, and fixed a few markdown formatting issues.

---

# 🩸 TEAM 61 – REVELATION 23

## Hack Notts 2025

> *“They said someone was murdered in the lake last night…”*

---

## Overview

**REVELATION 23** is an interactive mystery experience built with **React**, blending investigative storytelling with a simulated chat interface. It follows the story of a local medival cult folling in the footsteps of the orgional Rosicrucianism cult, the player then has to help the police to find a hidden chatroom, but are you sure that your help is as honest as it seems.
Players uncover the truth behind a **medieval ritualistic murder** by observing a corrupted message feed between cult members and investigators.
The story unfolds in real time — with **randomised, fast message delays**, **accurate timestamps**, and a distinctive, unsettling aesthetic that evokes early-2000s chat logs, complete with **mini challenges** woven throughout.

---

## Core Features

* **Dynamic Chat Simulation** — Realistic typing sequences with randomised short delays to create an immersive sense of “live” messaging.
* **Authentic Timestamps** — Each line displays a realistic, incrementing timestamp throughout the conversation.
* **Modular Sequence Control** — Message sets are defined in JSON-like structures, easily editable for new scenes or branches.
* **Atmospheric Storytelling** — The narrative unfolds purely through dialogue and digital traces — no exposition, only discovery.

---

## Gameplay Concept

* **Genre:** Psychological Horror / Mystery
* **Perspective:** Observer — you are monitoring a live data feed or private group chat.
* **Goal:** Piece together the truth behind a cult’s final conversation before the murder night.
* **Player Interaction:** Primarily observation, with multiple small challenges to complete in order to locate and access the chat room.

---

## Tech Stack

| Technology       | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| **React**        | Frontend framework                              |
| **Tailwind CSS** | Styling and responsive layout                   |
| **Next.js**      | Full-stack framework for deployment and routing |

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/PipMY/hack-notts.git
   cd hack-notts
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) (or your configured port) to view the game.

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

---

## Customisation

You can adjust pacing, visuals, and message styling from these files:

| File                              | Purpose                                                   |
| --------------------------------- | --------------------------------------------------------- |
| `src/components/ChatSequence.jsx` | Controls timing, message flow, and message content        |
| `src/components/Message.jsx`      | Handles typing animation and timestamps                   |
| `src/index.css`                   | Tailwind configuration, background texture, and scrollbar |
| `src/assets/`                     | Contains background images and audio (if used)            |

## Narrative Structure

| Chapter                       | Description                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| **Prologue – The Newspaper**  | You are sent a  newspaper, a woman has been murdered in the university lake, a new cult is presumed guilty for teh act after the findings of a medival ritual taking place on the banks.|
| **Chapter 1 – The Cult News** | You gain access to the cult news letter and read about the findings, something is wrong with the page though, could this lead deeper? |
| **Chapter 2 – The Watcher**   | A new user joins the chat. The timestamps begin to drift. Someone is watching.           |
| **Chapter 3 – The Red Room**  | The background darkens; messages become corrupted. The truth begins to surface.          |
| **Ending – Disconnect**       | All users vanish from the chat. You’re prompted to “join” the final transmission.        |

---

## Project Structure

```
src/
├── assets/
│   ├── grunge-paper-background.jpg
│   └── ...
├── components/
│   ├── chatroom.jsx
│   ├── cultnewspaper.jsx
│   ├── loading.jsx
│   └── ...
├── App.jsx
├── index.css
└── main.jsx
```

---

## Future Enhancements

* [ ] Branching dialogue / multiple endings
* [ ] Subtle ambient audio and typing sounds
* [ ] Mobile layout optimisation
* [ ] Session save / “resume from last chat” feature

---

## Credits

**Created by:** Pip Martin-Yates, Jom Joby, and Emily Ball
**Writing & Concept:** Pip Martin-Yates, Jom Joby, and Emily Ball
**Design:** Pip Martin-Yates, Jom Joby, and Emily Ball
**Programming:** Pip Martin-Yates, Jom Joby, and Emily Ball

**Special Thanks:**
To the incredible organisers and volunteers of **HackNotts 2025** — thank you for providing the time, space, and inspiration to make this project possible.

---

## Disclaimer

> This work is a piece of fiction inspired by online folklore and investigative storytelling.
> It contains dark themes and psychological horror elements.
> Viewer discretion is advised.

