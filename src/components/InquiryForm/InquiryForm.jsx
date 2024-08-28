import { createClient } from "@/utils/supabase/component";

export default function InquiryForm({ listingId }) {
  const supabase = createClient();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!listingId) return null;

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.phone) {
      alert("Please fill in all fields.");
      return;
    }

    console.log(data);

    const { error } = await supabase
      .from("inquiries")
      .insert({ ...data, listingId: listingId });

    if (error) {
      alert("Error inserting data:", error);
    } else {
      event.target.reset();
      alert("Form has been successfully sent.");
    }
  };

  return (
    <form className="w-full max-w-xl m-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4 font-bold text-center">Send Inquiry</h2>
      <div className="grid grid-cols-2 gap-x-8">
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
          <input name="email" type="email" className="input input-bordered" />
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
      </div>
      <button
        className="btn bg-slate-700 hover:bg-slate-600 text-white w-full mt-4"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
