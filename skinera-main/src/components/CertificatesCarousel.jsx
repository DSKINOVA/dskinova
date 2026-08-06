import React, { useEffect, useState, useRef, useCallback } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "";

export default function CertificatesCarousel() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const url = SERVER_URL
          ? `${SERVER_URL}/certificates`
          : "/api/certificates";
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data?.success) {
            setCertificates(data.items || []);
          } else {
            setError(true);
          }
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  // Responsive: how many items to show
  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1280) return 5;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 480) return 2;
    return 1;
  };

  const [visible, setVisible] = useState(getVisible);

  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const total = certificates.length;
  const maxIndex = Math.max(0, total - visible);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (total <= visible) return;
    autoPlayRef.current = setInterval(next, 2800);
    return () => clearInterval(autoPlayRef.current);
  }, [next, total, visible]);

  const pauseAuto = () => clearInterval(autoPlayRef.current);
  const resumeAuto = () => {
    if (total <= visible) return;
    autoPlayRef.current = setInterval(next, 2800);
  };

  const itemWidth = 100 / visible;

  return (
    <section className="bg-[#fdf8f4] py-16 sm:py-20 overflow-hidden">
      <style>{`
        .cert-line {
          display: inline-block;
          width: 50px; height: 3px;
          background: linear-gradient(90deg,#c98963,#be7f58);
          border-radius: 2px;
          vertical-align: middle;
          margin: 0 10px;
        }
        .cert-nav {
          display: flex; align-items: center; justify-content: center;
          width: 46px; height: 46px;
          border-radius: 50%; border: none;
          background: linear-gradient(135deg,#c98963,#be7f58);
          color: #fff; font-size: 15px;
          box-shadow: 0 4px 14px rgba(190,127,88,.35);
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
          flex-shrink: 0;
        }
        .cert-nav:hover { transform: scale(1.12); box-shadow: 0 6px 20px rgba(190,127,88,.5); }
        .cert-nav:disabled { opacity:.4; cursor:not-allowed; transform:none; }
        .cert-track-wrap { overflow: hidden; }
        .cert-track {
          display: flex;
          transition: transform .55s cubic-bezier(.4,0,.2,1);
          will-change: transform;
        }
        .cert-slide { flex-shrink:0; padding:0 10px; box-sizing:border-box; }
        .cert-card {
          border-radius: 16px; overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 18px rgba(0,0,0,.08);
          transition: transform .3s ease, box-shadow .3s ease;
          aspect-ratio: 3/4;
          display: flex; align-items: center; justify-content: center;
        }
        .cert-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 12px 32px rgba(190,127,88,.22); }
        .cert-card img { width:100%; height:100%; object-fit:contain; padding:12px; }
        .cert-dot {
          width:10px; height:10px; border-radius:50%;
          background:#d8b49a; border:none; cursor:pointer;
          transition: background .25s, transform .25s; padding:0;
        }
        .cert-dot.active { background:#c98963; transform:scale(1.35); }
        .cert-skel {
          border-radius:16px; aspect-ratio:3/4;
          background: linear-gradient(90deg,#f0e6dc 25%,#f8f0e8 50%,#f0e6dc 75%);
          background-size:200% 100%;
          animation: certShimmer 1.4s infinite;
        }
        @keyframes certShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <p className="text-[#BE7F58] text-sm uppercase tracking-widest mb-3 font-medium">
            Our Achievements
          </p>
          <h2 className="text-4xl sm:text-5xl font-domine font-medium text-gray-700 leading-tight">
            <span className="cert-line" />
            Certificates &amp; Awards
            <span className="cert-line" />
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            Recognised by leading dermatology &amp; healthcare bodies for excellence in skincare.
          </p>
        </div>

        {/* ── Loading Skeleton ── */}
        {loading && (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
          >
            {Array.from({ length: visible }).map((_, i) => (
              <div key={i} className="cert-skel" />
            ))}
          </div>
        )}

        {/* ── Carousel (has data) ── */}
        {!loading && total > 0 && (
          <>
            <div
              className="flex items-center gap-4"
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
            >
              <button
                className="cert-nav"
                onClick={prev}
                disabled={total <= visible}
                aria-label="Previous certificate"
              >
                <i className="fas fa-chevron-left" />
              </button>

              <div className="cert-track-wrap flex-1">
                <div
                  className="cert-track"
                  style={{ transform: `translateX(-${current * itemWidth}%)` }}
                >
                  {certificates.map((cert) => (
                    <div
                      key={cert._id}
                      className="cert-slide"
                      style={{ width: `${itemWidth}%` }}
                    >
                      <div className="cert-card">
                        <img
                          src={cert.imageUrl}
                          alt="Certificate"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="cert-nav"
                onClick={next}
                disabled={total <= visible}
                aria-label="Next certificate"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>

            {total > visible && (
              <div className="flex justify-center gap-2 mt-7">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    className={`cert-dot${i === current ? " active" : ""}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* ── Empty State (no certificates yet) ── */}
        {!loading && total === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#fdf0e7,#f5dcc8)" }}
            >
              <i className="fas fa-award text-3xl text-[#c98963] opacity-60" />
            </div>
            <p className="text-gray-400 text-sm tracking-wide">
              Certificates coming soon&hellip;
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
