// Your API key. Get one free at https://splitshotweather.com — the trial is
// 500,000 requests and needs no card.
//
// This is a demo you run locally, so the key sits in a file. In a real
// deployment, keep it on your server and proxy the tile requests: anything in
// front-end JavaScript is readable by anyone who opens devtools.
export const API_KEY = "PASTE_YOUR_KEY_HERE";

export const API = "https://api.splitshotweather.com";

// composite = radar reflectivity. Also available: qpe-1h, qpe-24h, lightning,
// wind. Each has its own manifest at /manifest/<product>.json.
export const PRODUCT = "composite";
