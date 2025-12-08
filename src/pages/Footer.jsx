import { Link } from "react-router-dom";

export default function Footer() {
  const routes = [
    { path: "/login", label: "Login" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/admin-panel", label: "Admin Panel" },
    { path: "/digital-product-passport", label: "Digital Product Passport" },
    { path: "/distributor-network", label: "Distributor Network" },
    { path: "/excise-duty-calculator", label: "Excise Duty Calculator" },
    { path: "/export-documentation-automation", label: "Export Documentation Automation" },
    { path: "/formula-compliance-engine", label: "Formula Compliance Engine" },
    { path: "/global-regulatory-map", label: "Global Regulatory Map" },
    { path: "/predicted-approval-timeline-engine", label: "Approval Timeline Engine" },
    { path: "/regulatory-rule-tables-admin", label: "Rule Tables Admin" },
    { path: "/regulatory-template-admin", label: "Template Admin" },
    { path: "/regulatory-template-uploader", label: "Template Uploader" },
  ];

  return (
    <footer style={{ padding: "20px", background: "#f5f5f5" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {routes.map((r) => (
          <Link key={r.path} to={r.path}>
            <button style={{ padding: "8px 12px" }}>{r.label}</button>
          </Link>
        ))}
      </div>
    </footer>
  );
}
