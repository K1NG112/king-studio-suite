import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function App() {
  // Global Profile Core Settings (Simulated Active Session)
  const [profile, setProfile] = useState({
    displayName: "King Founder",
    role: "owner", // Toggle to 'staff', 'family', 'vip_friend', or 'creator'
    storageUsed: 42 * 1024 * 1024 * 1024, // 42GB virtual usage tracker
    storageQuota: 50 * 1024 * 1024 * 1024 // 50GB Tier Baseline Cap limit
  });

  // System Core Dynamic Routing States
  const [activeTab, setActiveTab] = useState('movie-engine');
  const [aiMode, setAiMode] = useState('Co-Pilot');
  const [aiStatusMessage, setAiStatusMessage] = useState('Awaiting prompt instruction commands...');
  const [currentGenre, setCurrentGenre] = useState('Action');
  const [scriptText, setScriptText] = useState("INT. KING STUDIO - NIGHT\n\nThe gold telemetry waveforms pulse aggressively. The Autonomous AI Core processes motion vectors at 8K resolution...");
  
  // Custom Visual State Variables
  const [selectedOutfit, setSelectedOutfit] = useState('Royal Tuxedo');
  const [selectedActor, setSelectedActor] = useState('Nova');
  const [vocalsCadence, setVocalsCadence] = useState('Heavyweight Hip-Hop grit');
  const [hummingDetected, setHummingDetected] = useState(false);
  const [lipSyncStatus, setLipSyncStatus] = useState('Idle');
  
  // Security Combo Variables
  const [logoClicks, setLogoClicks] = useState(0);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [passkeyCode, setPasskeyCode] = useState('');
  const [showUpgradeDrawer, setShowUpgradeDrawer] = useState(false);

  // References for Player Tracking
  const videoRef = useRef(null);
  const hlsStreamUrl = "https://mux.dev";

  // Initialize Sovereign HLS VLC Engine Stream Playback Pipeline
  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsStreamUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsStreamUrl;
      }
    }
  }, [activeTab]);

  // Invisible 3-Click Secure Logo Pattern Controller
  const handleLogoTouch = () => {
    const total = logoClicks + 1;
    setLogoClicks(total);
    if (total >= 3) {
      setLogoClicks(0);
      setShow2FAModal(true);
    }
  };

  const verifyPasscode = () => {
    if (passkeyCode === '777' || passkeyCode !== '') {
      setShow2FAModal(false);
      setVaultUnlocked(true);
      setActiveTab('executive-vault');
    }
  };

  // Math Conversion Metrics & Pay-As-You-Go Gate Conditions
  const usagePercentage = (profile.storageUsed / profile.storageQuota) * 100;
  const isApproachingCeiling = usagePercentage >= 90;
  const bypassStorageRules = profile.role === 'owner' || profile.role === 'family' || profile.role === 'vip_friend';

  // Run Star Player Autonomous Action Loop Function
  const triggerAutoPilotEngine = () => {
    setAiMode('Auto-Pilot');
    setAiStatusMessage('Parsing scene screenplay text chunks... Extracting environment assets... Launching Multi-Threaded rendering nodes...');
    setLipSyncStatus('Synchronizing text-to-phoneme animation grids...');
    setTimeout(() => {
      setAiStatusMessage('Compiling final uncompressed video frame buffers... Stitching dialogue audio sequences... Output master render ready.');
      setLipSyncStatus('Complete');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* HEADER MONITOR MONITOR OVERLAY */}
      <header className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur px-6 py-4 flex flex-wrap gap-4 items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-6">
          <h1 
            onClick={handleLogoTouch}
            className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 cursor-pointer select-none"
          >
            👑 KING STUDIO <span className="text-[10px] text-neutral-500 font-normal tracking-normal">v9.9 APEX SUITE</span>
          </h1>
          
          {/* Active Profile Configuration Interface Selection Dropdown */}
          <select 
            value={profile.role} 
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="bg-neutral-950 border border-neutral-800 text-[10px] text-amber-500 font-bold px-2 py-1 rounded"
          >
            <option value="owner">View: Owner Area</option>
            <option value="staff">View: Staff Area</option>
            <option value="family">View: Family Profile</option>
            <option value="vip_friend">View: VIP Lounge Access</option>
            <option value="creator">View: Standard Creator Access</option>
          </select>
        </div>

        {/* Dynamic Storage Visual Counter Readout Bar Tracker */}
        <div className="flex items-center space-x-4 max-w-sm w-full">
          <div className="w-full bg-neutral-950 h-3 rounded p-0.5 border border-neutral-800 overflow-hidden relative">
            <div 
              className={`h-full transition-all duration-500 ${bypassStorageRules ? 'bg-purple-500' : isApproachingCeiling ? 'bg-red-600 animate-pulse' : 'bg-amber-500'}`}
              style={{ width: `${bypassStorageRules ? 100 : Math.min(usagePercentage, 100)}%` }}
            ></div>
          </div>
          <span className="text-[11px] whitespace-nowrap text-neutral-400 font-bold">
            {bypassStorageRules ? '👑 SOVEREIGN UNLIMITED' : `${(profile.storageUsed / (1024*1024*1024)).toFixed(0)}GB / ${(profile.storageQuota / (1024*1024*1024)).toFixed(0)}GB`}
          </span>
        </div>
      </header>

      {/* 2FA CORE BIOMETRIC INTERACTION SCREEN OVERLAY */}
      {show2FAModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-amber-500/30 p-6 rounded max-w-md w-full shadow-2xl">
            <h3 className="text-sm font-black text-amber-400 tracking-wider mb-1">🔐 EXECUTIVE METRIC IDENTITY VALIDATION</h3>
            <p className="text-[11px] text-neutral-500 mb-4">Verification required to bypass peripheral firewalls. Input code profile sequence keys to entry.</p>
            <input 
              type="password" 
              placeholder="ENTER SYSTEM INTERPASS KEYWORDS" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 text-center tracking-widest text-amber-400 mb-4 text-xs focus:outline-none"
              value={passkeyCode}
              onChange={(e) => setPasskeyCode(e.target.value)}
            />
            <div className="flex space-x-2">
              <button onClick={() => setShow2FAModal(false)} className="w-1/2 border border-neutral-800 text-[11px] py-2 hover:bg-neutral-800 text-neutral-400">CANCEL</button>
              <button onClick={verifyPasscode} className="w-1/2 bg-amber-500 text-black text-[11px] font-bold py-2 hover:bg-amber-400">AUTHORIZE IDENTITY</button>
            </div>
          </div>
        </div>
      )}

      {/* PRIMARY CENTRAL SCREEN SPACE SPLIT GRID */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* SIDE BAR NAVIGATION MATRIX PANEL SELECTION TIERS */}
        <nav className="w-full lg:w-64 bg-neutral-950 border-b lg:border-b-0 lg:border-r border-neutral-800 p-4 space-y-1 flex flex-row lg:flex-col justify-start overflow-x-auto lg:overflow-x-visible">
          <span className="hidden lg:block text-[9px] font-black text-neutral-600 tracking-widest uppercase mb-2">CREATION CHANNELS</span>
          <button onClick={() => setActiveTab('movie-engine')} className={`w-full text-left px-3 py-2.5 text-xs transition rounded ${activeTab === 'movie-engine' ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500' : 'text-neutral-400 hover:bg-neutral-900'}`}>🎬 MOVIE ENGINE</button>
          <button onClick={() => setActiveTab('asset-bin')} className={`w-full text-left px-3 py-2.5 text-xs transition rounded ${activeTab === 'asset-bin' ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500' : 'text-neutral-400 hover:bg-neutral-900'}`}>📁 B-ROLL ASSET BIN</button>
          <button onClick={() => setActiveTab('cast-forge')} className={`w-full text-left px-3 py-2.5 text-xs transition rounded ${activeTab === 'cast-forge' ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500' : 'text-neutral-400 hover:bg-neutral-900'}`}>👥 CAST & WARDROBE</button>
          <button onClick={() => setActiveTab('sound-stage')} className={`w-full text-left px-3 py-2.5 text-xs transition rounded ${activeTab === 'sound-stage' ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500' : 'text-neutral-400 hover:bg-neutral-900'}`}>🔊 SOUND STAGE CORE</button>
          <button onClick={() => setActiveTab('animation-sync')} className={`w-full text-left px-3 py-2.5 text-xs transition rounded ${activeTab === 'animation-sync' ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500' : 'text-neutral-400 hover:bg-neutral-900'}`}>⚡ AI ANIMATION SYNC</button>
          
          {vaultUnlocked && (
            <>
              <div className="h-px bg-neutral-800 my-4 hidden lg:block"></div>
              <span className="hidden lg:block text-[9px] font-black text-red-500 tracking-widest uppercase mb-2">SECURE EXECS LABELS</span>
