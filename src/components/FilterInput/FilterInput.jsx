export default function FilterInput({
  name,
  label,
  handleFilterChange,
  type = "text",
  placeholder,
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        min="0"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => handleFilterChange(name, event.target.value)}
      />
    </label>
  );
}
