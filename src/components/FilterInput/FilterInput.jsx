export default function FilterInput({ name, label, handleFilterChange }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        name={name}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => handleFilterChange(name, event.target.value)}
      />
    </label>
  );
}
