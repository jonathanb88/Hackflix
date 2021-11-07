
import "./Header.css";

function Header({ title, setTitle, setPage }) {
  return (
    <div className="header">
      <header className="mt-2">
        <h1>¡Your favourite movies!</h1>
        <h2>React Project - Jonathan Boublil</h2>
        <form>
          <label htmlFor="title" className="text-primary">Search</label>
          <input
            id="title"
            type="text"
            value={title}
            placeholder="Movie title..."
            onChange={(event) => {setTitle(event.target.value); setPage(1);}}
          />
        </form>
      </header>
           
    </div>
  );
}

export default Header;
