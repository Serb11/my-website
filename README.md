 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/styles.css b/styles.css
new file mode 100644
index 0000000000000000000000000000000000000000..6b228caea91fbef6f1eb78027a45ec0279902341
--- /dev/null
+++ b/styles.css
@@ -0,0 +1,466 @@
+:root {
+  --bg: #0f172a;
+  --bg-soft: #1e293b;
+  --text: #f8fafc;
+  --text-muted: rgba(248, 250, 252, 0.7);
+  --accent: #38bdf8;
+  --accent-soft: rgba(56, 189, 248, 0.2);
+  --card-bg: rgba(15, 23, 42, 0.7);
+  --shadow: 0 24px 48px rgba(8, 15, 35, 0.45);
+  --radius: 20px;
+}
+
+* {
+  box-sizing: border-box;
+}
+
+body {
+  margin: 0;
+  font-family: "Montserrat", sans-serif;
+  background: radial-gradient(circle at top, #1f3655, var(--bg));
+  color: var(--text);
+  line-height: 1.6;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover,
+a:focus {
+  color: var(--accent);
+}
+
+img {
+  max-width: 100%;
+  display: block;
+  border-radius: calc(var(--radius) - 6px);
+}
+
+header.hero {
+  min-height: 100vh;
+  padding: 32px clamp(24px, 5vw, 72px);
+  background: linear-gradient(160deg, rgba(56, 189, 248, 0.1), rgba(15, 23, 42, 0.95) 40%),
+    url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80") center/cover;
+  display: flex;
+  flex-direction: column;
+  justify-content: space-between;
+}
+
+.navbar {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 24px;
+}
+
+.logo {
+  font-family: "Playfair Display", serif;
+  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
+  letter-spacing: 2px;
+}
+
+.nav-links {
+  list-style: none;
+  display: flex;
+  gap: 24px;
+  margin: 0;
+  padding: 0;
+}
+
+.nav-links a {
+  font-weight: 500;
+  letter-spacing: 0.05em;
+  transition: color 0.2s ease;
+}
+
+.menu-toggle {
+  display: none;
+  background: rgba(15, 23, 42, 0.5);
+  color: var(--text);
+  border: 1px solid rgba(248, 250, 252, 0.2);
+  border-radius: 999px;
+  padding: 10px 18px;
+  cursor: pointer;
+}
+
+.hero-content {
+  max-width: 580px;
+  padding: 96px 0 80px;
+}
+
+.hero-content h1 {
+  font-family: "Playfair Display", serif;
+  font-size: clamp(2.5rem, 3vw + 1rem, 4rem);
+  line-height: 1.1;
+  margin: 0 0 24px;
+}
+
+.hero-content p {
+  margin: 0 0 32px;
+  color: var(--text-muted);
+  font-size: 1.1rem;
+}
+
+.cta {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  padding: 14px 32px;
+  border-radius: 999px;
+  background: linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.9));
+  color: var(--text);
+  font-weight: 600;
+  letter-spacing: 0.05em;
+  transition: transform 0.2s ease, box-shadow 0.2s ease;
+}
+
+.cta:hover,
+.cta:focus {
+  transform: translateY(-4px);
+  box-shadow: 0 12px 24px rgba(56, 189, 248, 0.4);
+}
+
+main {
+  padding: 80px clamp(24px, 5vw, 72px);
+  display: flex;
+  flex-direction: column;
+  gap: 120px;
+  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.99));
+}
+
+.section-heading {
+  max-width: 700px;
+  margin-bottom: 48px;
+}
+
+.eyebrow {
+  display: inline-flex;
+  padding: 6px 14px;
+  border-radius: 999px;
+  background: var(--accent-soft);
+  color: var(--accent);
+  font-size: 0.85rem;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+}
+
+.section-heading h2 {
+  margin: 16px 0;
+  font-size: clamp(2rem, 3vw + 1rem, 3rem);
+  font-family: "Playfair Display", serif;
+}
+
+.section-heading p {
+  margin: 0;
+  color: var(--text-muted);
+}
+
+.about-grid {
+  display: grid;
+  gap: 32px;
+  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
+  align-items: start;
+}
+
+.about-grid ul {
+  margin: 0;
+  padding-left: 18px;
+  color: var(--text-muted);
+}
+
+.about-grid li {
+  margin-bottom: 12px;
+}
+
+.accent {
+  color: var(--accent);
+  font-weight: 600;
+}
+
+.sessions {
+  display: flex;
+  flex-direction: column;
+  gap: 32px;
+}
+
+.session-filters {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 12px;
+}
+
+.filter-button {
+  border: 1px solid transparent;
+  background: rgba(15, 23, 42, 0.5);
+  color: var(--text-muted);
+  border-radius: 999px;
+  padding: 10px 20px;
+  cursor: pointer;
+  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;
+}
+
+.filter-button:hover,
+.filter-button:focus {
+  border-color: var(--accent);
+  color: var(--text);
+}
+
+.filter-button.active {
+  background: var(--accent-soft);
+  color: var(--accent);
+}
+
+.session-grid {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
+  gap: 32px;
+}
+
+.session-card {
+  background: var(--card-bg);
+  border: 1px solid rgba(248, 250, 252, 0.05);
+  border-radius: var(--radius);
+  box-shadow: var(--shadow);
+  overflow: hidden;
+  display: flex;
+  flex-direction: column;
+  min-height: 100%;
+  backdrop-filter: blur(12px);
+}
+
+.session-body {
+  padding: 24px;
+  display: flex;
+  flex-direction: column;
+  gap: 16px;
+}
+
+.session-body h3 {
+  margin: 0;
+  font-size: 1.4rem;
+}
+
+.session-body p {
+  margin: 0;
+  color: var(--text-muted);
+}
+
+audio {
+  width: 100%;
+  filter: drop-shadow(0 8px 18px rgba(15, 23, 42, 0.5));
+  border-radius: 999px;
+}
+
+.library {
+  display: flex;
+  flex-direction: column;
+  gap: 32px;
+}
+
+.library-grid {
+  display: grid;
+  gap: 32px;
+  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
+}
+
+.library-card {
+  background: rgba(30, 41, 59, 0.8);
+  border-radius: var(--radius);
+  padding: 28px;
+  border: 1px solid rgba(248, 250, 252, 0.06);
+  box-shadow: var(--shadow);
+  display: flex;
+  flex-direction: column;
+  gap: 16px;
+}
+
+.library-card h3 {
+  margin: 0;
+  font-size: 1.5rem;
+}
+
+.library-card p {
+  margin: 0;
+  color: var(--text-muted);
+}
+
+.text-link {
+  color: var(--accent);
+  font-weight: 600;
+}
+
+.video-wrapper {
+  position: relative;
+  padding-top: 56.25%;
+  border-radius: calc(var(--radius) - 6px);
+  overflow: hidden;
+  box-shadow: 0 16px 32px rgba(8, 15, 35, 0.45);
+}
+
+.video-wrapper iframe {
+  position: absolute;
+  inset: 0;
+  width: 100%;
+  height: 100%;
+  border: 0;
+}
+
+.newsletter {
+  text-align: center;
+  background: rgba(30, 41, 59, 0.7);
+  padding: 64px clamp(24px, 6vw, 96px);
+  border-radius: calc(var(--radius) + 10px);
+  border: 1px solid rgba(248, 250, 252, 0.05);
+  box-shadow: var(--shadow);
+}
+
+.subscribe-form {
+  display: flex;
+  flex-wrap: wrap;
+  justify-content: center;
+  gap: 16px;
+  margin: 32px 0 16px;
+}
+
+.subscribe-form input {
+  min-width: min(320px, 80vw);
+  padding: 14px 20px;
+  border-radius: 999px;
+  border: 1px solid transparent;
+  background: rgba(15, 23, 42, 0.6);
+  color: var(--text);
+  font-size: 1rem;
+}
+
+.subscribe-form input:focus {
+  outline: none;
+  border-color: var(--accent);
+  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
+}
+
+.subscribe-form button {
+  padding: 14px 28px;
+  border-radius: 999px;
+  border: none;
+  background: linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.9));
+  color: var(--text);
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  cursor: pointer;
+  transition: transform 0.2s ease, box-shadow 0.2s ease;
+}
+
+.subscribe-form button:hover,
+.subscribe-form button:focus {
+  transform: translateY(-3px);
+  box-shadow: 0 12px 24px rgba(56, 189, 248, 0.4);
+}
+
+.privacy {
+  color: var(--text-muted);
+  margin: 0;
+}
+
+.success-message {
+  margin-top: 16px;
+  color: var(--accent);
+  font-weight: 500;
+}
+
+.footer {
+  padding: 60px clamp(24px, 5vw, 72px);
+  background: rgba(10, 15, 30, 0.95);
+  border-top: 1px solid rgba(248, 250, 252, 0.08);
+}
+
+.footer-grid {
+  display: grid;
+  gap: 32px;
+  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
+  margin-bottom: 32px;
+}
+
+.footer h3,
+.footer h4 {
+  margin: 0 0 16px;
+  font-family: "Playfair Display", serif;
+}
+
+.footer ul {
+  margin: 0;
+  padding: 0;
+  list-style: none;
+  display: grid;
+  gap: 8px;
+  color: var(--text-muted);
+}
+
+.footer-copy {
+  margin: 0;
+  color: rgba(148, 163, 184, 0.7);
+  text-align: center;
+}
+
+.sr-only {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
+@media (max-width: 900px) {
+  .nav-links {
+    position: fixed;
+    top: 0;
+    right: 0;
+    height: 100vh;
+    width: min(70vw, 320px);
+    background: rgba(15, 23, 42, 0.98);
+    flex-direction: column;
+    align-items: flex-start;
+    padding: 120px 32px 32px;
+    transform: translateX(100%);
+    transition: transform 0.3s ease;
+    box-shadow: -12px 0 32px rgba(8, 15, 35, 0.4);
+  }
+
+  .nav-links.open {
+    transform: translateX(0);
+  }
+
+  .menu-toggle {
+    display: inline-flex;
+    align-items: center;
+    gap: 8px;
+  }
+
+  .hero {
+    padding-bottom: 40px;
+  }
+}
+
+@media (max-width: 600px) {
+  .hero-content {
+    padding: 64px 0 60px;
+  }
+
+  .hero-content p {
+    font-size: 1rem;
+  }
+
+  main {
+    padding: 64px 20px;
+    gap: 80px;
+  }
+
+  .newsletter {
+    padding: 48px 24px;
+  }
+}
 
EOF
)
