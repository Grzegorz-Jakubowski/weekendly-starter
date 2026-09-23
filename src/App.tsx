import { ABadge } from "./components/atoms/ABadge/ABadge";

export const App = () => (
  <main className="mx-auto max-w-6xl px-4 py-10">
    <ABadge>Want to go</ABadge>
    <ABadge tone="green">Visited</ABadge>
  </main>
);
