import { Link } from "react-router-dom";

export default function Footer() {
  const routes = [
    { path: "/admin-panel", label: "Admin Panel" },
    { path: "/predicted-approval-timeline-engine", label: "Approval Timeline Engine" },
    
    { path: "/distributor-network", label: "Distributor Network" },
    { path: "/digital-product-passport", label: "Digital Product Passport" },
    { path: "/dashboard", label: "Dashboard" },

    { path: "/excise-duty-calculator", label: "Excise Duty Calculator" },
    { path: "/export-documentation-automation", label: "Export Documentation Automation" },
    { path: "/formula-compliance-engine", label: "Formula Compliance Engine" },

    { path: "/global-regulatory-map", label: "Global Regulatory Map" },

    { path: "/login", label: "Login" },
    { path: "/landingdashboard", label: "Label Upload & Compliance" },
  
    { path: "/regulatory-rule-tables-admin", label: "Rule Tables Admin" },
    { path: "/regulatory-template-admin", label: "Template Admin" },
    { path: "/regulatory-template-uploader", label: "Template Uploader" },
  ];

  return (
    <footer className="w-full py-4 border-t">
      <div className="mx-auto">
        {/* Accordion using native HTML details/summary */}
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer list-none bg-white px-6 py-2 rounded-xl shadow hover:shadow-md transition">
            <span className="text-gray-800 font-semibold text-lg">
              Navigation Menu
            </span>
            <span className="text-gray-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {routes.map((r) => (
              <Link key={r.path} to={r.path}>
                <div className="inline-block bg-white text-gray-700 py-1 px-3 rounded-xl shadow hover:shadow-md hover:bg-gray-50 transition cursor-pointer text-center text-xs font-medium whitespace-nowrap">
                  {r.label}
                </div>
              </Link>
            ))}
          </div>
        </details>
      </div>
    </footer>
  );
}