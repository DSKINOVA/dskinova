import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

import { SERVER_URL } from "../../services/api.js";

export default function CertificateManager() {
  const [certificates, setCertificates] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [editOrder, setEditOrder] = useState(0);
  const [deletingId, setDeletingId] = useState(null);
  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);

  // ── fetch all ──────────────────────────────────────────────────────────────
  const fetchCertificates = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/certificates`);
      const data = await res.json();
      if (data?.success) setCertificates(data.items || []);
    } catch {
      toast.error("Failed to load certificates");
    }
  };

  useEffect(() => { fetchCertificates(); }, []);

  // ── upload new ─────────────────────────────────────────────────────────────
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5 MB");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", selectedFile);
      fd.append("order", certificates.length); // append at end
      const res = await fetch(`${SERVER_URL}/certificates`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || "Upload failed");
      toast.success("Certificate uploaded successfully");
      setSelectedFile(null);
      setPreview("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      await fetchCertificates();
    } catch (e) {
      toast.error(e?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ── edit (replace image) ───────────────────────────────────────────────────
  const startEdit = (cert) => {
    setEditingId(cert._id);
    setEditOrder(cert.order);
    setPreview("");
    setSelectedFile(null);
  };

  const handleEditFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { toast.error("Invalid image"); return; }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSaveEdit = async (cert) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("order", editOrder);
      if (selectedFile) fd.append("image", selectedFile);
      const res = await fetch(`${SERVER_URL}/certificates/${cert._id}`, {
        method: "PUT",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || "Update failed");
      toast.success("Certificate updated");
      setEditingId(null);
      setSelectedFile(null);
      setPreview("");
      await fetchCertificates();
    } catch (e) {
      toast.error(e?.message || "Update failed");
    } finally {
      setUploading(false);
    }
  };

  // ── delete ─────────────────────────────────────────────────────────────────
  const handleDelete = (id) => {
    if (deletingId === id) return;
    toast.dismiss();
    setDeletingId(id);
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-900">Delete Certificate?</p>
          <p className="text-sm text-gray-600">This action cannot be undone.</p>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                try {
                  const res = await fetch(`${SERVER_URL}/certificates/${id}`, {
                    method: "DELETE",
                  });
                  const data = await res.json();
                  if (!res.ok || !data?.success) throw new Error(data?.message || "Delete failed");
                  toast.success("Certificate deleted");
                  await fetchCertificates();
                } catch (e) {
                  toast.error(e?.message || "Delete failed");
                } finally {
                  setDeletingId(null);
                  toast.dismiss(t.id);
                }
              }}
              className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={() => { setDeletingId(null); toast.dismiss(t.id); }}
              className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: Infinity, style: { padding: "16px", minWidth: "260px" } }
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mt-8">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-domine font-medium text-[#b37556]">
          Certificates &amp; Awards ({certificates.length})
        </h2>
      </div>

      {/* ── Upload New Certificate ── */}
      <div className="border-2 border-dashed border-[#d8b49a] rounded-xl p-5 mb-8 bg-[#fdf8f4]">
        <p className="text-sm font-medium text-gray-700 mb-3">Upload New Certificate</p>

        {/* Drop zone / preview */}
        <div
          className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-xl overflow-hidden bg-white border border-[#e8d5c4] mb-4 flex items-center justify-center cursor-pointer group"
          onClick={() => fileInputRef.current?.click()}
        >
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-contain p-3" />
          ) : (
            <div className="flex flex-col items-center text-gray-400 group-hover:text-[#c98963] transition-colors">
              <i className="fas fa-cloud-upload-alt text-4xl mb-2" />
              <p className="text-sm">Click to select image</p>
              <p className="text-xs mt-1 text-gray-300">JPG, PNG, WEBP · Max 5 MB</p>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />

        <div className="flex justify-center gap-3 mt-2">
          {preview && (
            <button
              onClick={() => { setPreview(""); setSelectedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
              className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              Remove
            </button>
          )}
          <button
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
            className="px-5 py-2 bg-[#c98963] hover:bg-[#be7f58] disabled:opacity-50 text-white text-sm rounded-md transition-colors flex items-center gap-2"
          >
            {uploading ? (
              <><i className="fas fa-spinner fa-spin" /> Uploading...</>
            ) : (
              <><i className="fas fa-upload" /> Upload Certificate</>
            )}
          </button>
        </div>
      </div>

      {/* ── Existing Certificates Grid ── */}
      {certificates.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <i className="fas fa-award text-5xl mb-3 block opacity-30" />
          <p>No certificates uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert._id}
              className="relative group rounded-xl overflow-hidden border border-[#e8d5c4] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[3/4] flex items-center justify-center bg-white">
                {editingId === cert._id && preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-contain p-2" />
                ) : (
                  <img src={cert.imageUrl} alt="Certificate" className="w-full h-full object-contain p-2" loading="lazy" />
                )}
              </div>

              {/* Edit mode */}
              {editingId === cert._id ? (
                <div className="p-3 bg-[#fdf8f4] border-t border-[#e8d5c4]">
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-xs text-gray-600 whitespace-nowrap">Order:</label>
                    <input
                      type="number"
                      value={editOrder}
                      min="0"
                      onChange={(e) => setEditOrder(parseInt(e.target.value, 10) || 0)}
                      className="w-16 text-xs border border-gray-300 rounded px-2 py-1 text-center"
                    />
                  </div>
                  <button
                    onClick={() => editFileInputRef.current?.click()}
                    className="w-full text-xs py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors mb-2"
                  >
                    <i className="fas fa-image mr-1" /> Replace Image
                  </button>
                  <input
                    ref={editFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleEditFile}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(cert)}
                      disabled={uploading}
                      className="flex-1 text-xs py-1.5 bg-[#c98963] hover:bg-[#be7f58] disabled:opacity-50 text-white rounded-md transition-colors"
                    >
                      {uploading ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => { setEditingId(null); setPreview(""); setSelectedFile(null); }}
                      className="flex-1 text-xs py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                /* Action buttons overlay */
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => startEdit(cert)}
                    title="Edit"
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#c98963] flex items-center justify-center shadow-md transition-transform hover:scale-110"
                  >
                    <i className="fas fa-pen text-xs" />
                  </button>
                  <button
                    onClick={() => handleDelete(cert._id)}
                    title="Delete"
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-red-500 flex items-center justify-center shadow-md transition-transform hover:scale-110"
                  >
                    <i className="fas fa-trash text-xs" />
                  </button>
                </div>
              )}

              {/* Order badge */}
              {editingId !== cert._id && (
                <div className="absolute top-2 left-2 bg-[#c98963] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
                  #{cert.order}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
