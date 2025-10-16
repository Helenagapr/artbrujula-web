import { createRoot } from "react-dom/client";
import { initializeIcons } from "@fluentui/react";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "../i18n/index.ts";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";


const root = createRoot(document.getElementById("root")!);

function renderApp() {
  initializeIcons();
  root.render(
    <StrictMode>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FluentProvider>
    </StrictMode>
  );
}

renderApp();
