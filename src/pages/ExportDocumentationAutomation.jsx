import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { motion } from 'framer-motion';
import { FileSpreadsheet, CheckCircle2, Clock, Globe2, Plane, Truck, Download } from 'lucide-react';
import Footer from './Footer.jsx';

export default function ExportDocumentationAutomation() {
  const [shipmentData, setShipmentData] = useState({ shipmentId: '', sku: '', destination: '', importer: '', template: '' });
  const [progress, setProgress] = useState(0);
  const [docsGenerated, setDocsGenerated] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipmentData((prev) => ({ ...prev, [name]: value }));
  };

  const generateDocs = () => {
    setProgress(0);
    const stages = [
      'Commercial Invoice',
      'Packing List',
      'Pro-Forma Invoice',
      'Importer of Record Details',
      'Customs Declaration',
      'Certificates (if available)',
    ];
    setDocsGenerated([]);
    stages.forEach((doc, i) => {
      setTimeout(() => {
        setDocsGenerated((prev) => [...prev, doc]);
        setProgress(((i + 1) / stages.length) * 100);
      }, 700 * (i + 1));
    });
  };

  const shellBg = 'bg-[#f5f7fc] text-slate-900';
  const cardStyle = 'bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]';

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-8 py-10 md:px-16 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                HN
              </span>
              Helmsman Nexus
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Admin · Export Documentation Automation
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
            <span className="text-slate-500">Theme</span>
            <span className="font-semibold text-slate-800">Soft Glass</span>
          </div>
        </div>
        
        <Footer />
                
      </>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Section - Form */}
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
              <FileSpreadsheet className="text-indigo-500" /> Export Documentation Automation
            </h2>
            <p className="text-sm text-slate-600 mb-2">
              Generate all required export/import paperwork automatically. Documents are stored per shipment and per SKU with live progress tracking.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Input name="shipmentId" value={shipmentData.shipmentId} onChange={handleChange} placeholder="Shipment ID" />
              <Input name="sku" value={shipmentData.sku} onChange={handleChange} placeholder="SKU / Product Code" />
              <Input name="destination" value={shipmentData.destination} onChange={handleChange} placeholder="Destination Country" />
              <Input name="importer" value={shipmentData.importer} onChange={handleChange} placeholder="Importer / Consignee Name" />
              <Input name="template" value={shipmentData.template} onChange={handleChange} placeholder="Certificate Template (if any)" />
            </div>

            <div className="mt-6">
              <Button className="w-full bg-slate-900 text-white rounded-full text-xs py-2 hover:bg-slate-800" onClick={generateDocs}>
                Generate Export Documents
              </Button>
              {progress > 0 && (
                <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-indigo-300 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>

          
          </CardContent>
        </Card>

        {/* Right Section - Summary */}
        <Card className={cardStyle}>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-md font-semibold mb-2 flex items-center gap-2 text-slate-900">
              <Globe2 className="text-indigo-500" /> Documentation Progress
            </h2>

            {docsGenerated.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {docsGenerated.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between border-b border-slate-200 pb-1">
                    <span>{doc}</span>
                    <CheckCircle2 className="text-emerald-400 h-4 w-4" />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">Click the button to begin automatic export documentation generation.</p>
            )}

            {progress > 0 && progress < 100 && (
              <div className="flex items-center gap-2 text-xs text-indigo-400">
                <Clock className="h-3 w-3 animate-spin" /> Generating Documents...
              </div>
            )}

            {progress === 100 && (
              <Button
                variant="outline"
                className="w-full mt-5 border-indigo-200 text-indigo-600 text-xs rounded-full px-3 py-1 flex items-center justify-center gap-1 hover:bg-indigo-50"
              >
                <Download className="h-3.5 w-3.5" /> Download All Documents (ZIP)
              </Button>
            )}

            <div className="mt-6 flex justify-between items-center text-xs text-slate-500">
              <span className="flex items-center gap-1"><Plane className="h-3.5 w-3.5" /> Logistics Ready</span>
              <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5" /> Linked to Shipment ID</span>
            </div>

            <p className="text-[11px] text-slate-500">
              Generated documents include Commercial Invoice, Packing List, Pro-Forma Invoice, Importer of Record, Customs Declaration, and Certificates (if templates available).
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
