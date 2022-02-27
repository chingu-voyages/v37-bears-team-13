import { Link } from 'react-router-dom';

const WrongRoutePage = (): JSX.Element => {
  return (
    <>
      <div className="App">
        <header>
          <h1>Stock Race</h1>
        </header>
        <main>
          <p>Nothing here!</p>
          <Link to="/">Back to Home</Link>
        </main>
      </div>
    </>
  );
};
export default WrongRoutePage;
