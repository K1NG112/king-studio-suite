import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('movie-engine');
  const [role, setRole] = useState('owner');
  const [vaultUnlocked, setVaultUnlocked] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex flex-col p-6">
      <header className="border-b border-neutral-800 pb-4 mb-6 flex justify-between items-center">
        <h1 className="text-xl font-black text-amber-500 tracking-widest">👑 KING STUDIO SUITE</h1>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-neutral-900 border border-neutral-800 text-amber-400 p-2 text-xs font-bold rounded">
          <option value="owner">Owner Area</option>
          <option value="staff">Staff Area</option>
          <option value="creator">Creator Access</option>
        </select>
      </header>

      <div className="bg-neutral-900 border border-neutral-800 p-4 rounded mb-6 border-l-4 border-amber-500">
        <span className="text-xs font-black text-amber-400 block tracking-widest">⭐ STAR PLAYER ACTIVE</span>
        <p className="text-xs text-neutral-400 mt-1 italic">"Autonomous AI Director Core Online: Core workflow scripts armed and ready."</p>
      </div>

      <div className="flex gap-2 border-b border-neutral-800 pb-3 mb-6 overflow-x-auto">
        {['movie-engine', 'asset-bin', 'cast-forge', 'sound-stage', 'animation-sync', 'executive-vault'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-bold uppercase rounded ${activeTab === tab ? 'bg-amber-500 text-black' : 'bg-neutral-900 text-neutral-400'}`}>
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      <main className="flex-1 bg-neutral-900/40 border border-neutral-800 rounded p-6">
        {activeTab === 'movie-engine' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-amber-400">🎬 MOVIE ENGINE DIRECTING SCREEN</h3>
            <textarea defaultValue="INT. KING STUDIO - NIGHT\nAutonomous AI Core processing motion vectors at 8K resolution..." className="w-full h-40 bg-neutral-950 border border-neutral-800 rounded p-4 text-xs text-neutral-300 resize-none focus:outline-none" />
          </div>
        )}

        {activeTab === 'asset-bin' && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-amber-400">📁 B-ROLL & stock ASSET BIN</h3>
            <p className="text-xs text-neutral-400">Automated cutaway tracks mapped directly to script descriptors.</p>
          </div>
        )}

        {activeTab === 'cast-forge' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-amber-400">👥 CAST FORGE & WARDROBE</h3>
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-400">
              <span className="text-neutral-200 block font-bold">Active Suit: Royal Tuxedo Matrix Palette</span>
              <span className="text-cyan-400 block font-bold mt-1">✓ NEURAL WEBGL LIGHTING MATCH ENGAGED</span>
            </div>
          </div>
        )}

        {activeTab === 'sound-stage' && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-amber-400">🔊 SOUND STAGE AUDIO</h3>
            <p className="text-xs text-neutral-400">Timbre Cadence Voice Clones: Heavyweight Hip-Hop grit / Elite R&B vocal runs active.</p>
          </div>
        )}

        {activeTab === 'animation-sync' && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-amber-400">⚡ AI ANIMATION SYNC</h3>
            <p className="text-xs text-neutral-400">Humming-To-Beat rhythm clock tracking and neural lip-sync automation paths initialized.</p>
          </div>
        )}

        {activeTab === 'executive-vault' && vaultUnlocked && (
          <div className="space-y-4 animate-fade-in">
            {role === 'owner' && (
              <div className="border border-amber-500/20 p-4 rounded bg-neutral-950">
                <span className="text-xs font-black text-amber-400 block">👑 THE THRONE ROOM (OWNER AREA)</span>
                <div className="grid grid-cols-2 gap-4 mt-3 text-xs">
                  <div className="p-2 border border-neutral-800">Gross Rev: <strong className="text-amber-400">$24,950,200</strong></div>
                  <div className="p-2 border border-neutral-800">MRR Flow: <strong className="text-cyan-400">$1,450,900</strong></div>
                </div>
                <div className="mt-4 pt-2 border-t border-neutral-800 flex items-center gap-2 text-xs">
                  <input type="range" className="w-full accent-amber-500" />
                  <span className="text-amber-400 font-bold whitespace-nowrap">$450k/mo Payroll</span>
                </div>
              </div>
            )}

            {role === 'staff' && (
              <div className="border border-cyan-500/20 p-4 rounded bg-neutral-950">
                <span className="text-xs font-black text-cyan-400 block">⚙️ OPERATIONS DECK (STAFF AREA)</span>
                <p className="text-xs text-neutral-400 mt-2">Active CRM ticket systems, storage quota override sliders, and security logs loaded.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-800 mt-6 pt-4 flex justify-between text-[11px] text-neutral-500">
        <div className="flex gap-4">
          <span>👑 Royal Pass: $29/mo</span>
          <span>⚡ Studio Empire Elite: $100/mo</span>
        </div>
        <span>🔒 256-Bit SSL Secured</span>
      </footer>
    </div>
  );
}
