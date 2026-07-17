import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('movie-engine');
  const [role, setRole] = useState('owner');
  const [selectedOutfit, setSelectedOutfit] = useState('Royal Tuxedo');
  const [selectedActor, setSelectedActor] = useState('Nova');
  const [vocalsCadence, setVocalsCadence] = useState('High-Performance Dialogue Flow');
  const [hummingActive, setHummingActive] = useState(false);
  const [lipSyncStatus, setLipSyncStatus] = useState('Idle');
  const [aiMode, setAiMode] = useState('Co-Pilot');
  const [aiText, setAiText] = useState('Awaiting instruction parameters...');

  const triggerAutopilot = () => {
    setAiMode('Auto-Pilot');
    setAiText('Autonomous Engine active. Matching dynamic motion vectors for multi-angle grids...');
    setLipSyncStatus('Syncing vocal tracks...');
    setTimeout(() => {
      setAiText('Compilation success! Final 8K render master asset deployed safely.');
      setLipSyncStatus('Complete ✓');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex flex-col p-6 selection:bg-amber-500 selection:text-black">
      {/* PLATFORM MONITOR HEADER LAYER */}
      <header className="border-b border-neutral-800 pb-4 mb-6 flex flex-wrap justify-between items-center gap-4 bg-neutral-900/40 p-4 rounded border">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-black text-amber-500 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">👑 KING STUDIO SUITE</h1>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-neutral-950 border border-neutral-800 text-amber-400 p-2 text-xs font-bold rounded focus:outline-none focus:border-amber-500">
            <option value="owner">View: Owner Area</option>
            <option value="staff">View: Staff Area</option>
            <option value="creator">View: Creator Access</option>
          </select>
        </div>
        <div className="flex items-center space-x-3 text-xs bg-neutral-950 px-3 py-1.5 rounded border border-neutral-800">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          <span className="text-neutral-400 font-bold">👑 SOVEREIGN UNLIMITED CORE (100% FREE SPACE)</span>
        </div>
      </header>

      {/* STAR PLAYER COGNITIVE AI CONTROLLER PANEL */}
      <div className="bg-neutral-900/80 border border-neutral-800 p-4 rounded mb-6 border-l-4 border-l-amber-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div className="space-y-0.5">
          <span className="text-xs font-black text-amber-400 block tracking-widest">⭐ STAR PLAYER: COGNITIVE AI DIRECTOR ({aiMode})</span>
          <p className="text-xs text-neutral-300 italic">"{aiText}"</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => { setAiMode('Co-Pilot'); setAiText('Ready to assist alongside your configurations.'); }} className={`px-3 py-1 text-[10px] font-bold border rounded transition ${aiMode === 'Co-Pilot' ? 'bg-amber-500/20 text-amber-400 border-amber-500' : 'bg-neutral-950 text-neutral-500 border-neutral-800'}`}>CO-PILOT</button>
          <button onClick={triggerAutopilot} className={`px-3 py-1 text-[10px] font-bold border rounded transition ${aiMode === 'Auto-Pilot' ? 'bg-red-500/20 text-red-400 border-red-500' : 'bg-neutral-950 text-neutral-500 border-neutral-800'}`}>AUTOPILOT (FULL MOVIE)</button>
        </div>
      </div>

      {/* WORKSPACE NAVIGATION FILTER TABS ROW */}
      <div className="flex gap-1 border-b border-neutral-800 pb-3 mb-6 overflow-x-auto whitespace-nowrap">
        {['movie-engine', 'asset-bin', 'cast-forge', 'sound-stage', 'animation-sync', 'executive-vault'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-black uppercase rounded transition tracking-wider ${activeTab === tab ? 'bg-amber-500 text-black shadow-lg font-black' : 'bg-neutral-900/60 text-neutral-400 hover:bg-neutral-900'}`}>
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* PANEL MAIN RUNNING CONTROLLER OUTPUT */}
      <main className="flex-1 bg-neutral-900/20 border border-neutral-800 rounded-xl p-6 backdrop-blur">
        {activeTab === 'movie-engine' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-black text-amber-400 uppercase tracking-widest">🎬 MOVIE ENGINE DIRECTING SCREEN</h3>
              <textarea defaultValue={"INT. KING STUDIO - NIGHT\n\nThe generation sequence is locking framework boundaries. We are officially going live.\n\nThe Cognitive AI Core flashes green, initializing a hyper-shutter 8K render pass."} className="w-full h-56 bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-xs font-mono text-neutral-200 leading-relaxed focus:outline-none focus:border-amber-500 resize-none shadow-inner" />
            </div>
            <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-neutral-500 block uppercase mb-2">Sovereign VLC Stream Monitoring Engine</span>
                <div className="bg-black aspect-video rounded border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 font-bold relative">
                  🎞️ HIGH-PERFORMANCE VIDEO FEED
                  <div className="absolute bottom-2 right-2 text-[9px] bg-black/80 px-2 py-0.5 rounded text-neutral-400 font-black">MADE WITH KING STUDIO</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500 mt-4">
                <span>TIMECODE: SMPTE SYNC</span>
                <span className="text-amber-400 font-bold">00:14:23:12</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'asset-bin' && (
          <div className="space-y-4">
            <h3 className="text-xs font-black text-amber-400 uppercase tracking-widest">📁 AUTOMATED B-ROLL &amp; stock ASSET BIN</h3>
            <p className="text-xs text-neutral-400">AI automatically generates multi-angle background clips matching screenplay lines.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              {['Atmospheric Smoke Trail', 'City Skyline Overhead', 'High-Shutter Car Chase Loop', 'Low-Key Suspense Corridor'].map((item) => (
                <div key={item} className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg text-center hover:border-neutral-600 transition cursor-pointer">
                  <span className="block text-lg mb-1">🎬</span>
                  <span className="text-[10px] font-bold text-neutral-300 block leading-tight">{item}</span>
                  <span className="text-[9px] text-neutral-600 block mt-1 uppercase">Ready for Timeline</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cast-forge' && (
          <div className="space-y-6">
            <div className="flex flex-wrap justify-between items-center border-b border-neutral-800 pb-3 gap-2">
              <div>
                <h3 className="text-xs font-black text-amber-400 uppercase tracking-widest">👥 CAST FORGE &amp; INTERACTIVE WARDROBE</h3>
                <p className="text-xs text-neutral-400">Apply synthetic fabrics and adjust light values via WebGL filters.</p>
              </div>
              <div className="flex gap-1 bg-neutral-950 p-1 rounded border border-neutral-800">
                {['Nova', 'Kaz', 'Lex'].map((act) => (
                  <button key={act} onClick={() => setSelectedActor(act)} className={`px-3 py-1 text-[10px] font-bold rounded ${selectedActor === act ? 'bg-amber-500 text-black' : 'text-neutral-400 hover:text-neutral-200'}`}>{act}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg space-y-3">
                <span className="text-[10px] text-neutral-400 font-bold block uppercase tracking-wider">Synthetic Wardrobe Garments</span>
                <div className="grid grid-cols-2 gap-2">
                  {['Royal Tuxedo', 'Cyberpunk Matrix Vane', 'Classic Noir Trenchcoat', 'Tactical Operative Armor', 'Elite Gown Gold', 'Casual Linen Shirt'].map((suit) => (
                    <button key={suit} onClick={() => setSelectedOutfit(suit)} className={`p-2 rounded text-[10px] text-left border transition font-bold ${selectedOutfit === suit ? 'bg-amber-500/10 text-amber-400 border-amber-500' : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:bg-neutral-800'}`}>{suit}</button>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-500/40 flex items-center justify-center text-xl mb-2">👤</div>
                <span className="text-xs font-bold text-neutral-200">ASSIGNED TALENT: {selectedActor}</span>
                <span className="text-[10px] text-neutral-500 uppercase mt-0.5">Texture Overlay: {selectedOutfit}</span>
                <span className="text-[9px] text-cyan-400 font-bold tracking-widest mt-3">✓ NEURAL WEBGL LIGHTING FILTER ENGAGED</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sound-stage' && (
          <div className="space-y-6">
            <div>
