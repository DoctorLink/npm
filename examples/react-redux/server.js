const express = require("express");
const path = require("path");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const {
  ClientCredentialsTokenProvider,
} = require("@doctorlink/traversal-core");

app.use(express.static(path.join(__dirname, "build")));

const clientId = "YOUR_CLIENT_ID",
  clientSecret = "YOUR_CLIENT_SECRET";

const tokenProvider = new ClientCredentialsTokenProvider({
  identityUrl: "https://prod-platform-identity.doctorlink.engineering/",
  clientId,
  clientSecret,
  logging: true,
});

const token = async (req, res, next) => {
  try {
    const token = await tokenProvider.get();
    if (token) req.headers.authorization = `bearer ${token.access_token}`;
    console.log();
    next();
  } catch (error) {
    console.log(error);
    res.statusCode = 401;
    res.end(
      JSON.stringify({ message: "Client credentials authentication failed" })
    );
  }
};

app.use(
  "/api/engine",
  token,
  createProxyMiddleware({
    changeOrigin: true,
    target: "https://prod-platform-traversal-engine.doctorlink.engineering",
    pathRewrite: {
      "/api/engine/": `/api/v2/${clientId}/`,
    },
  })
);

app.use(
  "/api/hra",
  token,
  createProxyMiddleware({
    changeOrigin: true,
    target: "https://prod-platform-traversal-hra.doctorlink.engineering",
    pathRewrite: {
      "/api/hra/": `/api/v1/${clientId}/`,
    },
  })
);

app.listen(process.env.PORT || 8080);
