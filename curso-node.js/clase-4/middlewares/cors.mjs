
const ACEPTED_ORIGINS = [
  "http://localhost:60458",
  "http://localhost:3000",
  "http://localhost:8080",
];

export const middlewareCors = (req, res, next) => {
  const origin = req.headers.origin;

  if (ACEPTED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, OPTIONS, DELETE",
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  next();
};

