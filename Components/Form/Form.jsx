export default function Form({ userInput, setUserInput }) {
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
