  <script type="text/babel">
    function App() {
      return (
        <div>
          <h1>Hello from JSX!</h1>
          <p>This is rendered using React and Babel.</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
