import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://stock-platform-166c.onrender.com/auth/register", {
        name,
        email,
        password,
      });

      // Store JWT for dashboard use
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to dashboard
      window.location.href = "http://localhost:3001";
    } catch (err) {
      const msg =
        err.response?.data?.message || "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Logo / Brand */}
        <div style={styles.brand}>
          <h2 style={styles.brandName}>Zerodha</h2>
          <p style={styles.brandSub}>Open a free account in minutes</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
              autoComplete="name"
            />
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Min. 6 characters"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
              autoComplete="new-password"
            />
          </div>

          {/* Error */}
          {error && <p style={styles.error}>{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            style={{ ...styles.btn, opacity: loading ? 0.7 : 1 }}
            disabled={loading}
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p style={styles.loginHint}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

// ─── Inline styles (no extra CSS file needed) ─────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    padding: "40px 48px",
    width: "100%",
    maxWidth: "420px",
    boxSizing: "border-box",
  },
  brand: {
    textAlign: "center",
    marginBottom: "28px",
  },
  brandName: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#387ED1",
  },
  brandSub: {
    margin: "4px 0 0",
    color: "#888",
    fontSize: "0.9rem",
  },
  fieldGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.85rem",
    color: "#444",
    fontWeight: 500,
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
  },
  error: {
    color: "#e05263",
    fontSize: "0.85rem",
    marginBottom: "12px",
    marginTop: "-6px",
  },
  btn: {
    width: "100%",
    padding: "11px",
    background: "#387ED1",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "4px",
    transition: "background 0.2s",
  },
  loginHint: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "0.88rem",
    color: "#666",
  },
  loginLink: {
    color: "#387ED1",
    textDecoration: "none",
    fontWeight: 500,
  },
};

export default Signup;
