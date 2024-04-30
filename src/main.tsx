import React from "react";
import ReactDOM from "react-dom/client";
import { open } from "@tauri-apps/plugin-shell";
import { configDir } from "@tauri-apps/api/path";

(async () => {
  const path = await configDir();
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <button onClick={() => open(path)}>Click me twice</button>
      {path}
    </React.StrictMode>,
  );
})();
