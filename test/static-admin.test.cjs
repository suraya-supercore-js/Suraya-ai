const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const admin = fs.readFileSync(path.join(root, "admin.html"), "utf8");
const ledger = fs.readFileSync(path.join(root, "client-ledger.js"), "utf8");
const youtube = fs.readFileSync(path.join(root, "youtube-integration.js"), "utf8");

test("admin page loads the real YouTube integration file", () => {
  assert.match(admin, /youtube-integration\.js/);
  assert.ok(fs.existsSync(path.join(root, "youtube-integration.js")));
});

test("untrusted YouTube metadata is rendered as text, not HTML", () => {
  assert.match(admin, /title\.textContent/);
  assert.match(admin, /details\.textContent/);
  assert.doesNotMatch(admin, /yt-stats['"]\)\.innerHTML/);
});

test("video embed requires an 11-character YouTube video ID", () => {
  assert.match(admin, /\^\[A-Za-z0-9_-\]\{11\}\$/);
  assert.match(admin, /youtube-nocookie\.com\/embed/);
});

test("local prototype ledger does not store admin passwords", () => {
  assert.doesNotMatch(ledger, /suraya_admin_pass|setAdminPassword|getAdminPassword/);
});

test("YouTube API calls validate channel IDs and have a timeout", () => {
  assert.match(youtube, /UC\[A-Za-z0-9_-\]\{22\}/);
  assert.match(youtube, /AbortSignal\.timeout\(10000\)/);
});
