module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "HlN0YVRzHSmxvuWZEZ1awg==",
      "hVS8KkLhbuKpNiyoG0FJwg==",
      "RpR2ZvZF6G4OQry9bUXo9Q==",
      "SsR+DkVkMF0HmkSFygafoQ==",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
