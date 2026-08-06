import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import { Helmet } from "react-helmet-async";
import AppointmentModal from "./AppointmentModal.jsx";
import skin from "../../public/Images/blogs/skin doctor in jaipur.jpg";

export default function NewsArchive() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // SEO Meta
  const seoMetaTitle = "Skin & Beauty Blogs & News | Dskinova Jaipur";
  const seoMetaDesc =
    "Read the latest blogs, news, and skin & beauty tips from expert skin doctors and cosmetologists at Dskinova Jaipur.";
  const seoImage = skin;

  useEffect(() => {
    document.querySelectorAll("meta[name='description']").forEach((m) => m.remove());
    document.querySelectorAll("meta[name='keywords']").forEach((m) => m.remove());
  }, []);

  useEffect(() => {
    let abort = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(
          (import.meta.env.VITE_SERVER_URL || "") + "/news"
        );
        if (res.ok) {
          const data = await res.json();
          if (!abort && data?.success) {
            setItems(Array.isArray(data.items) ? data.items : []);
          }
        }
      } catch (e) {
        if (!abort) setItems([]);
      } finally {
        if (!abort) setLoading(false);
      }
    }
    load();
    return () => {
      abort = true;
    };
  }, []);

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO */}
      <Helmet>
        <title>{seoMetaTitle}</title>
        <meta name="description" content={seoMetaDesc} />
        <meta property="og:title" content={seoMetaTitle} />
        <meta property="og:description" content={seoMetaDesc} />
        <meta property="og:image" content={seoImage} />
      </Helmet>

      {/* HEADER + HERO */}
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      {/* DYNAMIC NEWS / BLOG GRID */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-8 text-center">
            Blogs & News Articles
          </h1>

          {loading ? (
            <div className="text-center text-gray-600 py-12">Loading blogs…</div>
          ) : items.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              No blogs or news available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {items.map((article) => (
                <article
                  key={article._id || article.slug}
                  className="group border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  <Link to={`/news/${article.slug}`}>
                    <div className="w-full h-72 overflow-hidden bg-gray-100">
                      <img
                        src={article.cardImage || "/logo.png"}
                        onError={(e) => (e.currentTarget.src = "/logo.png")}
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs text-gray-500 mb-2 font-medium">
                      {formatDate(article.date || article.createdAt)}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#BE7F58] transition-colors line-clamp-2 mb-3">
                      <Link to={`/news/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-flex items-center text-[#c98963] hover:text-[#be7f58] font-semibold text-sm mt-auto"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        onSubmit={() => setAppointmentOpen(false)}
      />
    </div>
  );
}
