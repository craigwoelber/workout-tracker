// Copy this file to config.js and fill in your real values.
// config.js is gitignored — never commit it.
window.CONFIG = {
  // The ID from your Google Sheet URL:
  // https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
  sheetId: "YOUR_SHEET_ID_HERE",

  // Google Cloud service account JSON key (for Sheets read/write access).
  // Download from: GCP Console → IAM & Admin → Service Accounts → your account → Keys → Add Key → JSON
  serviceAccountKey: {
    type: "service_account",
    project_id: "",
    private_key_id: "",
    private_key: "",
    client_email: "",
    client_id: "",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "",
    universe_domain: "googleapis.com"
  },
};
