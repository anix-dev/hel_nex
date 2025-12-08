import { Link } from "react-router-dom";

export default function Footer() {
  const routes = [
    { path: "/login", label: "Login" },
      { path: "/dashboard", label: "Dashboard" },
    { path: "/landingdashboard", label: "Label Upload & Compliance" },
  
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
    <footer className="w-full bg-gray-100 py-8 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {routes.map((r) => (
          <Link key={r.path} to={r.path}>
            <div className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow hover:shadow-md hover:bg-gray-50 transition cursor-pointer text-center text-sm font-medium">
              {r.label}
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
}
