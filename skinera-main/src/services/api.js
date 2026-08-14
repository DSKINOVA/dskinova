const getApiUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return import.meta.env.VITE_SERVER_URL || "http://localhost:3000/api";
    }
  }
  return "https://dskinova-server.vercel.app/api";
};

export const SERVER_URL = getApiUrl();
