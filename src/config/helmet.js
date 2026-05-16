import helmet from "helmet";

const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],

      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
      ],

      styleSrc: [
        "'self'",
        "'unsafe-inline'",
      ],

      imgSrc: [
        "'self'",
        "data:",
        "https:",
      ],

      connectSrc: [
        "'self'",
        "https:",
      ],

      fontSrc: [
        "'self'",
        "https:",
        "data:",
      ],
    },
  },
});

export default helmetConfig;