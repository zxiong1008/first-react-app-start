import { useState } from "react";
import "./styles.css";

const title = [
  ["Why React?"],
  ["Core Features"],
  ["How Popular is React"],
  ["Related Resources"],
];

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Used by Netflix, Facebook, Instagram, Uber, and Airbnb to build their apps",
    "Popular among developers globally. 45% of hiring employers are looking for React developers",
    "Framework for modern UI design",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {title.map((item, i) => (
            <button
              key={i}
              className={activeContentIndex === i ? "active" : ""}
              onClick={() => setActiveContentIndex(i)}
            >
              {item}
            </button>
          ))}
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
