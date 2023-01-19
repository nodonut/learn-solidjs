import type { Component } from 'solid-js';
import Logo from '../Logo/Logo';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-800">
      <header>
        <nav class="flex justify-center pt-4">
          <Logo />
        </nav>
      </header>
    </div>
  );
};

export default App;
