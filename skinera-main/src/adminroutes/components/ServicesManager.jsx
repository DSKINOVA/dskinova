import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
];

export default function ServicesManager() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [baSelectedFile, setBaSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [baPreview, setBaPreview] = useState("");
  const fileInputRef = useRef(null);
  const baFileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    customSlug: "",
    category: "Skin",
    subcategory: "",
    short: "",
    price: "",
    currency: "₹",
    priceNote: "per session",
    overviewTitle: "Overview",
    overviewDescription: "",
    includedText: "",
    excludedText: "",
    duration: "",
    sessions: "",
    results: "",
    beforeAfterHeading: "",
    beforeAfterDescription: "",
    beforeAfterPointsText: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
  });

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${SERVER_URL}/services`);
      if (res.ok) {
        const data = await res.json();
        if (data?.success) setServices(data.items || []);
      }
    } catch {
      // ignore network errors silently or fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleBaFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBaSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setBaPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setEditingId(null);
    setSelectedFile(null);
    setBaSelectedFile(null);
    setPreview("");
    setBaPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (baFileInputRef.current) baFileInputRef.current.value = "";
    setForm({
      title: "",
      customSlug: "",
      category: "Skin",
      subcategory: "",
      short: "",
      price: "",
      currency: "₹",
      priceNote: "per session",
      overviewTitle: "Overview",
      overviewDescription: "",
      includedText: "",
      excludedText: "",
      duration: "",
      sessions: "",
      results: "",
      beforeAfterHeading: "",
      beforeAfterDescription: "",
      beforeAfterPointsText: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
    });
  };

  const formRef = useRef(null);

  const handleEdit = (srv) => {
    setEditingId(srv._id);
    setPreview(srv.image || "");
    setBaPreview(srv.beforeAfter?.image || "");
    setSelectedFile(null);
    setBaSelectedFile(null);
    setForm({
      title: srv.title || "",
      customSlug: srv.slug || "",
      category: srv.category || "Skin",
      subcategory: srv.subcategory || "",
      short: srv.short || "",
      price: srv.price || "",
      currency: srv.currency || "₹",
      priceNote: srv.priceNote || "per session",
      overviewTitle: srv.overview?.title || "Overview",
      overviewDescription: srv.overview?.description || "",
      includedText: (srv.included || []).join("\n"),
      excludedText: (srv.excluded || []).join("\n"),
      duration: srv.additionalInfo?.duration || "",
      sessions: srv.additionalInfo?.sessions || "",
      results: srv.additionalInfo?.results || "",
      beforeAfterHeading: srv.beforeAfter?.heading || "",
      beforeAfterDescription: srv.beforeAfter?.description || "",
      beforeAfterPointsText: (srv.beforeAfter?.points || []).join("\n"),
      seoTitle: srv.seo?.meta_title || "",
      seoDescription: srv.seo?.meta_description || "",
      seoKeywords: srv.seo?.focus_keyphrase || "",
    });
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Service Title is required");
      return;
    }

    const includedArray = form.includedText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const excludedArray = form.excludedText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const baPointsArray = form.beforeAfterPointsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("customSlug", form.customSlug);
    fd.append("category", form.category);
    fd.append("subcategory", form.subcategory);
    fd.append("short", form.short);
    fd.append("price", form.price);
    fd.append("currency", form.currency);
    fd.append("priceNote", form.priceNote);
    fd.append("overviewTitle", form.overviewTitle);
    fd.append("overviewDescription", form.overviewDescription);
    fd.append("included", JSON.stringify(includedArray));
    fd.append("excluded", JSON.stringify(excludedArray));
    fd.append("duration", form.duration);
    fd.append("sessions", form.sessions);
    fd.append("results", form.results);
    fd.append("beforeAfterHeading", form.beforeAfterHeading);
    fd.append("beforeAfterDescription", form.beforeAfterDescription);
    fd.append("beforeAfterPoints", JSON.stringify(baPointsArray));
    fd.append("seoTitle", form.seoTitle);
    fd.append("seoDescription", form.seoDescription);
    fd.append("seoKeywords", form.seoKeywords);

    if (selectedFile) {
      fd.append("image", selectedFile);
    }
    if (baSelectedFile) {
      fd.append("beforeAfterImage", baSelectedFile);
    }

    try {
      const url = editingId
        ? `${SERVER_URL}/services/${editingId}`
        : `${SERVER_URL}/services`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: fd });
      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to save service");
      }

      toast.success(editingId ? "Service updated!" : "Service created!");
      resetForm();
      fetchServices();
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`${SERVER_URL}/services/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || "Delete failed");
      toast.success("Service deleted");
      fetchServices();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 my-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b pb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold font-domine text-[#BE7F58]">
            Manage Services ({services.length})
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Add/edit dynamic services with Category, Subcategory & Custom Slugs.
          </p>
        </div>
        {editingId && (
          <button
            onClick={resetForm}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition"
          >
            + Add New Service
          </button>
        )}
      </div>

      {/* FORM */}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-12 bg-amber-50/40 p-6 rounded-2xl border border-amber-100">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-amber-200 pb-2">
          {editingId ? "Edit Service" : "Add New Service"}
        </h3>

        {/* TITLE & SLUG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Laser Hair Removal"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
              required
            />
          </div>

          <div>
            {/* Custom URL Slug Field */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom URL Slug (Optional)
            </label>
            <input
              type="text"
              name="customSlug"
              value={form.customSlug}
              onChange={handleChange}
              placeholder="e.g. laser-hair-removal-treatment-in-jaipur"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              URL path: <span className="font-mono text-gray-700">/{form.customSlug || "your-slug"}</span>
            </p>
          </div>
        </div>

        {/* CATEGORY & SUBCATEGORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-xl border border-amber-200/60">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Main Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none bg-white"
            >
              <option value="Skin">Skin</option>
              <option value="Hair">Hair</option>
              <option value="Homeopathic">Homeopathic</option>
              <option value="Wellness">Wellness</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subcategory / Group (Optional)
            </label>
            <input
              type="text"
              name="subcategory"
              value={form.subcategory}
              onChange={handleChange}
              placeholder="e.g. Anti Aging, Hairfall, Pigmentation, Acne Scar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description / Subtitle
          </label>
          <input
            type="text"
            name="short"
            value={form.short}
            onChange={handleChange}
            placeholder="e.g. Concentrated platelet growth factors to revive follicles."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
          />
        </div>

        {/* PRICE & INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (numeric)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="2500"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <input
              type="text"
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Note
            </label>
            <input
              type="text"
              name="priceNote"
              value={form.priceNote}
              onChange={handleChange}
              placeholder="per session"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Image
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#BE7F58] file:text-white hover:file:bg-[#a66a45] cursor-pointer"
          />
          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-28 object-cover rounded-lg border border-gray-200"
              />
            </div>
          )}
        </div>

        {/* OVERVIEW */}
        <div className="space-y-4 pt-2">
          <h4 className="font-semibold text-gray-700 text-sm">Overview Details</h4>
          <div>
            <input
              type="text"
              name="overviewTitle"
              value={form.overviewTitle}
              onChange={handleChange}
              placeholder="Overview Section Heading"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none mb-2"
            />
            <ReactQuill
              theme="snow"
              value={form.overviewDescription}
              onChange={(val) => setForm((prev) => ({ ...prev, overviewDescription: val }))}
              modules={modules}
              formats={formats}
              placeholder="Detailed description of the service..."
              className="bg-white rounded-lg mb-2"
            />
          </div>
        </div>

        {/* INCLUDED / EXCLUDED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Included Points (1 per line)
            </label>
            <textarea
              name="includedText"
              rows={4}
              value={form.includedText}
              onChange={handleChange}
              placeholder="Skin Analysis&#10;Consultation&#10;Post Care"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excluded Points (1 per line)
            </label>
            <textarea
              name="excludedText"
              rows={4}
              value={form.excludedText}
              onChange={handleChange}
              placeholder="Surgical Procedure&#10;Home Care Kit"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
        </div>

        {/* ADDITIONAL INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="e.g. 45-60 min"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recommended Sessions
            </label>
            <input
              type="text"
              name="sessions"
              value={form.sessions}
              onChange={handleChange}
              placeholder="e.g. 4 sessions"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Results
            </label>
            <input
              type="text"
              name="results"
              value={form.results}
              onChange={handleChange}
              placeholder="e.g. Visible in 2-3 weeks"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE7F58] outline-none"
            />
          </div>
        </div>

        {/* BEFORE & AFTER SECTION */}
        <div className="border-t border-amber-200 pt-4 space-y-4">
          <h4 className="font-semibold text-gray-800 text-sm">Before & After Section (Dynamic)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Heading</label>
              <input
                type="text"
                name="beforeAfterHeading"
                value={form.beforeAfterHeading}
                onChange={handleChange}
                placeholder="e.g. Transform Your Skin with Laser Therapy"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Custom Before & After Image</label>
              <input
                type="file"
                ref={baFileInputRef}
                onChange={handleBaFileChange}
                accept="image/*"
                className="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-amber-600 file:text-white cursor-pointer"
              />
              {baPreview && (
                <img
                  src={baPreview}
                  alt="BA Preview"
                  className="mt-2 w-28 h-20 object-cover rounded-md border"
                />
              )}
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
            <textarea
              name="beforeAfterDescription"
              rows={3}
              value={form.beforeAfterDescription}
              onChange={handleChange}
              placeholder="Describe the before & after transformation results..."
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Bullet Points (1 per line)</label>
            <textarea
              name="beforeAfterPointsText"
              rows={3}
              value={form.beforeAfterPointsText}
              onChange={handleChange}
              placeholder="Visible improvement in skin texture&#10;Reduction in fine lines&#10;Improved tone & glow"
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="border-t border-amber-200 pt-4 space-y-4">
          <h4 className="font-semibold text-gray-800 text-sm">SEO Meta Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Meta Title</label>
              <input
                type="text"
                name="seoTitle"
                value={form.seoTitle}
                onChange={handleChange}
                placeholder="SEO Title for Google"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Focus Keyphrase</label>
              <input
                type="text"
                name="seoKeywords"
                value={form.seoKeywords}
                onChange={handleChange}
                placeholder="e.g. hair prp jaipur"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Meta Description</label>
            <textarea
              name="seoDescription"
              rows={2}
              value={form.seoDescription}
              onChange={handleChange}
              placeholder="Meta description for search engines"
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#BE7F58] hover:bg-[#a66a45] text-white font-medium rounded-lg shadow-md transition"
          >
            {editingId ? "Update Service" : "Save Service"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* SERVICES LIST TABLE */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">All Active Services ({services.length})</h3>
        {loading ? (
          <p className="text-gray-500">Loading services...</p>
        ) : services.length === 0 ? (
          <p className="text-gray-500">No services added yet.</p>
        ) : (
          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b">
                <tr>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Category / Subcategory</th>
                  <th className="py-3 px-4">Slug (URL)</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {services.map((srv) => (
                  <tr key={srv._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <img
                        src={srv.image || "/logo.png"}
                        alt={srv.title}
                        className="w-12 h-10 object-cover rounded-md"
                        onError={(e) => (e.currentTarget.src = "/logo.png")}
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{srv.title}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mr-2">
                        {srv.category || "Skin"}
                      </span>
                      {srv.subcategory && (
                        <span className="inline-block px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                          {srv.subcategory}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-mono text-xs">/{srv.slug}</td>
                    <td className="py-3 px-4">{srv.currency}{srv.price} <span className="text-xs text-gray-400">({srv.priceNote})</span></td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(srv)}
                        className="px-3 py-1 bg-amber-100 text-amber-800 hover:bg-amber-200 rounded-md font-medium text-xs transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(srv._id)}
                        className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded-md font-medium text-xs transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
