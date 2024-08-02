export default function FilterSelect({ label }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          {label}
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </label>
  );
}
