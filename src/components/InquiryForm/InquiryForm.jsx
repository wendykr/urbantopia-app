export default function InquiryForm({ listingId }) {
  return (
    <form className="w-full max-w-xs">
      <h2 className="text-2xl mb-4">Send Inquiry</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input name="name" type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input name="email" type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input name="phone" type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Listing ID</span>
        </label>
        <input
          value={listingId}
          disabled
          name="listing_id"
          type="text"
          className="input input-bordered"
        />
      </div>
      <button className="btn btn-primary w-full mt-4" type="submit">
        Send
      </button>
    </form>
  );
}
