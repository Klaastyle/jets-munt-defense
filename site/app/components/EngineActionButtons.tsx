"use client";

import { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import CADDownloadModal from "./CADDownloadModal";

export default function EngineActionButtons({ engineModel }: { engineModel: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="engine-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
        <Link href="/contacto" className="btn btn-primary">
          Consultar este motor
        </Link>
        <button 
          className="btn btn-outline" 
          onClick={() => setIsModalOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Download size={18} />
          Descargar 3D CAD
        </button>
      </div>

      <CADDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        engineModel={engineModel} 
      />
    </>
  );
}
