export default function FilterSelect({
  label,
  name,
  handleFilterChange,
  placeholder,
  options,
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        className="select select-bordered w-full max-w-xs"
        name={name}
        onChange={(event) => handleFilterChange(name, event.target.value)}
      >
        {placeholder && (
          <option defaultValue value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
