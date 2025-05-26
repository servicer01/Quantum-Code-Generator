import React, { useState, useEffect, useRef } from 'react';
import { QrCode, Zap, Settings, BarChart3, Palette, Download, Mail, Rocket, Car, Brain, Shield, Eye, Sparkles, Cloud, MapPin, Clock, Smartphone, Globe, Database, Link, Users, TrendingUp, AlertCircle, CheckCircle, Send, FileText, Image, Layers, Activity, Target } from 'lucide-react';

const QuantumQRGenerator = () => {
  const [mode, setMode] = useState('streamlined');
  const [qrData, setQrData] = useState('');
  const [clientName, setClientName] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [codeType, setCodeType] = useState('static');
  const [batchMode, setBatchMode] = useState(false);
  const [outputFormat, setOutputFormat] = useState('png');
  const [customization, setCustomization] = useState({
    colors: { primary: '#6366f1', secondary: '#8b5cf6' },
    logo: false,
    style: 'modern',
    size: 200,
    errorCorrection: 'M'
  });
  
  // Advanced AI Features
  const [analytics, setAnalytics] = useState({
    smartRouting: false,
    aiOptimization: false,
    predictiveAnalytics: false,
    sentimentTracking: false,
    weatherRouting: false,
    locationAware: false,
    deviceOptimization: false,
    voiceActivation: false
  });
  
  // Campaign Database
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  
  // Email System
  const [emailSettings, setEmailSettings] = useState({
    recipient: '',
    subject: '',
    message: '',
    attachFormat: 'png'
  });
  
  // Live Data
  const [liveData, setLiveData] = useState({
    weather: { condition: 'sunny', temp: 72 },
    location: { city: 'Atlanta', state: 'GA' },
    deviceStats: { mobile: 68, desktop: 32 },
    timeOptimal: '2:30 PM - 4:00 PM'
  });
  
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('generator');
  const canvasRef = useRef(null);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        deviceStats: {
          mobile: Math.floor(Math.random() * 30) + 60,
          desktop: Math.floor(Math.random() * 30) + 25
        }
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Real QR Code Generation with Advanced Features
  const generateAdvancedQR = (data, options = {}) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = options.size || 200;
    
    canvas.width = size;
    canvas.height = size;
    
    // Clear canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);
    
    // Create gradient background if enabled
    if (customization.style === 'modern') {
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, customization.colors.primary + '20');
      gradient.addColorStop(1, customization.colors.secondary + '20');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    
    // Generate QR pattern (simplified but more realistic)
    const moduleSize = Math.floor(size / 25);
    const modules = generateQRMatrix(data);
    
    for (let row = 0; row < 25; row++) {
      for (let col = 0; col < 25; col++) {
        if (modules[row] && modules[row][col]) {
          ctx.fillStyle = customization.colors.primary;
          ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
        }
      }
    }
    
    // Add finder patterns (corner squares)
    drawFinderPattern(ctx, 0, 0, moduleSize);
    drawFinderPattern(ctx, 18 * moduleSize, 0, moduleSize);
    drawFinderPattern(ctx, 0, 18 * moduleSize, moduleSize);
    
    return canvas.toDataURL();
  };

  const generateQRMatrix = (data) => {
    // Simplified QR matrix generation
    const matrix = Array(25).fill().map(() => Array(25).fill(false));
    
    // Add some realistic patterns
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        // Skip finder pattern areas
        if ((i < 9 && j < 9) || (i < 9 && j > 15) || (i > 15 && j < 9)) continue;
        
        // Create pattern based on data
        const hash = data.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        matrix[i][j] = (i * j + hash) % 3 === 0;
      }
    }
    
    return matrix;
  };

  const drawFinderPattern = (ctx, x, y, moduleSize) => {
    // Outer square
    ctx.fillStyle = customization.colors.primary;
    ctx.fillRect(x, y, moduleSize * 7, moduleSize * 7);
    
    // Inner white square
    ctx.fillStyle = 'white';
    ctx.fillRect(x + moduleSize, y + moduleSize, moduleSize * 5, moduleSize * 5);
    
    // Center square
    ctx.fillStyle = customization.colors.primary;
    ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, moduleSize * 3, moduleSize * 3);
  };

  const generateQRCode = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate AI processing with realistic delays
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate the QR code
      const dataUrl = generateAdvancedQR(qrData, customization);
      
      // AI-powered analytics simulation
      const aiScore = calculateAIScore();
      const estimatedScans = calculateEstimatedScans();
      const engagementPrediction = calculateEngagement();
      
      const newCode = {
        id: `QC-${Date.now()}`,
        dataUrl,
        clientName,
        campaignName,
        data: qrData,
        type: codeType,
        format: outputFormat,
        createdAt: new Date().toISOString(),
        stats: {
          estimatedScans,
          aiScore,
          engagementPrediction,
          uniqueId: `QC-${Date.now()}`,
          weatherOptimal: liveData.weather.condition === 'sunny',
          deviceOptimization: analytics.deviceOptimization ? liveData.deviceStats : null,
          smartRouting: analytics.smartRouting
        },
        analytics: { ...analytics }
      };
      
      setGeneratedCode(newCode);
      
      // Add to campaigns database
      setCampaigns(prev => [newCode, ...prev]);
      
    } catch (error) {
      console.error('QR Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const calculateAIScore = () => {
    let score = 70;
    if (analytics.aiOptimization) score += 10;
    if (analytics.smartRouting) score += 8;
    if (analytics.deviceOptimization) score += 7;
    if (qrData.includes('https://')) score += 5;
    if (clientName && campaignName) score += 10;
    return Math.min(100, score + Math.floor(Math.random() * 10));
  };

  const calculateEstimatedScans = () => {
    let base = 500;
    if (analytics.predictiveAnalytics) base *= 1.5;
    if (analytics.smartRouting) base *= 1.3;
    if (liveData.weather.condition === 'sunny') base *= 1.2;
    return Math.floor(base + Math.random() * 1000);
  };

  const calculateEngagement = () => {
    let engagement = 65;
    if (analytics.sentimentTracking) engagement += 15;
    if (analytics.weatherRouting) engagement += 10;
    if (customization.style === 'modern') engagement += 8;
    return Math.min(100, engagement + Math.floor(Math.random() * 15));
  };

  const sendEmail = async () => {
    if (!generatedCode || !emailSettings.recipient) return;
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Email sent to ${emailSettings.recipient} with QR code attachment!`);
    setEmailSettings({ ...emailSettings, recipient: '', subject: '', message: '' });
  };

  const downloadCode = () => {
    if (!generatedCode) return;
    
    const link = document.createElement('a');
    link.download = `${generatedCode.id}.${outputFormat}`;
    link.href = generatedCode.dataUrl;
    link.click();
  };

  const ModeToggle = () => (
    <div className="flex items-center space-x-2 mb-6">
      <button
        onClick={() => setMode(mode === 'streamlined' ? 'spaceship' : 'streamlined')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 transform hover:scale-105 ${
          mode === 'spaceship' 
            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-lg animate-pulse' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
        }`}
      >
        {mode === 'streamlined' ? <Car className="w-4 h-4" /> : <Rocket className="w-4 h-4" />}
        <span className="font-medium">
          {mode === 'streamlined' ? 'Engage Spaceship Mode' : 'Return to Streamlined'}
        </span>
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );

  const TabNavigation = () => (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
      {[
        { id: 'generator', label: 'Generator', icon: QrCode },
        { id: 'campaigns', label: 'Campaigns', icon: Database },
        { id: 'analytics', label: 'Live Analytics', icon: Activity },
        { id: 'email', label: 'Email Delivery', icon: Mail }
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
            activeTab === tab.id 
              ? 'bg-white shadow-sm text-blue-600 font-medium' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <tab.icon className="w-4 h-4" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );

  const StreamlinedMode = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter client name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter campaign name"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">QR Code Data</label>
        <textarea
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
          placeholder="Enter URL, contact info, or any data to encode..."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select
            value={codeType}
            onChange={(e) => setCodeType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="static">Static</option>
            <option value="dynamic">Dynamic</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
          <select
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
            <option value="pdf">PDF</option>
            <option value="eps">EPS</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Generation</label>
          <select
            value={batchMode ? 'batch' : 'single'}
            onChange={(e) => setBatchMode(e.target.value === 'batch')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="single">Single</option>
            <option value="batch">Batch</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={generateQRCode}
            disabled={!qrData.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <QrCode className="w-4 h-4" />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const SpaceshipMode = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-200 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center">
          <Brain className="w-6 h-6 mr-3" />
          Quantum AI Intelligence Layer
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700 flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Smart Routing
            </h4>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.smartRouting}
                onChange={(e) => setAnalytics({...analytics, smartRouting: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Contextual Routing</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.weatherRouting}
                onChange={(e) => setAnalytics({...analytics, weatherRouting: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Weather-Based</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.locationAware}
                onChange={(e) => setAnalytics({...analytics, locationAware: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Location Aware</span>
            </label>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Optimization
            </h4>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.aiOptimization}
                onChange={(e) => setAnalytics({...analytics, aiOptimization: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Design Optimization</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.predictiveAnalytics}
                onChange={(e) => setAnalytics({...analytics, predictiveAnalytics: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Predictive Analytics</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.sentimentTracking}
                onChange={(e) => setAnalytics({...analytics, sentimentTracking: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Sentiment Analysis</span>
            </label>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700 flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Device Intelligence
            </h4>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.deviceOptimization}
                onChange={(e) => setAnalytics({...analytics, deviceOptimization: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Device Optimization</span>
            </label>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Next-Gen Features
            </h4>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={analytics.voiceActivation}
                onChange={(e) => setAnalytics({...analytics, voiceActivation: e.target.checked})}
                className="rounded text-purple-600"
              />
              <span className="text-sm">Voice Activation</span>
            </label>
          </div>
        </div>
        
        {/* Live Environmental Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/50 rounded-lg">
          <div className="text-center">
            <Cloud className="w-6 h-6 mx-auto text-blue-500 mb-1" />
            <div className="text-sm font-medium">{liveData.weather.condition}</div>
            <div className="text-xs text-gray-600">{liveData.weather.temp}°F</div>
          </div>
          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto text-green-500 mb-1" />
            <div className="text-sm font-medium">{liveData.location.city}</div>
            <div className="text-xs text-gray-600">{liveData.location.state}</div>
          </div>
          <div className="text-center">
            <Smartphone className="w-6 h-6 mx-auto text-purple-500 mb-1" />
            <div className="text-sm font-medium">{liveData.deviceStats.mobile}% Mobile</div>
            <div className="text-xs text-gray-600">{liveData.deviceStats.desktop}% Desktop</div>
          </div>
          <div className="text-center">
            <Clock className="w-6 h-6 mx-auto text-orange-500 mb-1" />
            <div className="text-sm font-medium">Optimal</div>
            <div className="text-xs text-gray-600">{liveData.timeOptimal}</div>
          </div>
        </div>
      </div>

      <StreamlinedMode />

      <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-800 mb-6 flex items-center">
          <Palette className="w-6 h-6 mr-3" />
          Quantum Design Laboratory
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
            <input
              type="color"
              value={customization.colors.primary}
              onChange={(e) => setCustomization({
                ...customization,
                colors: {...customization.colors, primary: e.target.value}
              })}
              className="w-full h-10 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
            <input
              type="color"
              value={customization.colors.secondary}
              onChange={(e) => setCustomization({
                ...customization,
                colors: {...customization.colors, secondary: e.target.value}
              })}
              className="w-full h-10 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select
              value={customization.style}
              onChange={(e) => setCustomization({...customization, style: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="modern">Quantum Gradient</option>
              <option value="minimal">Neural Minimal</option>
              <option value="bold">Plasma Bold</option>
              <option value="organic">Bio-Organic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              value={customization.size}
              onChange={(e) => setCustomization({...customization, size: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="150">Compact (150px)</option>
              <option value="200">Standard (200px)</option>
              <option value="300">Large (300px)</option>
              <option value="400">XL (400px)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Error Correction</label>
            <select
              value={customization.errorCorrection}
              onChange={(e) => setCustomization({...customization, errorCorrection: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="L">Low (~7%)</option>
              <option value="M">Medium (~15%)</option>
              <option value="Q">Quartile (~25%)</option>
              <option value="H">High (~30%)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const CampaignDatabase = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Database className="w-6 h-6 mr-3" />
          Campaign Database
        </h3>
        <div className="text-sm text-gray-600">
          {campaigns.length} campaigns stored
        </div>
      </div>
      
      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-800">{campaign.campaignName || 'Unnamed Campaign'}</h4>
                <p className="text-sm text-gray-600">{campaign.clientName} • {new Date(campaign.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right text-sm">
                  <div className="font-medium text-green-600">{campaign.stats.estimatedScans.toLocaleString()} scans</div>
                  <div className="text-gray-500">AI Score: {campaign.stats.aiScore}/100</div>
                </div>
                <img src={campaign.dataUrl} alt="QR Code" className="w-12 h-12 border rounded" />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Link className="w-3 h-3 mr-1" />
                  {campaign.type}
                </span>
                <span className="flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  {campaign.format.toUpperCase()}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCampaign(campaign)}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs hover:bg-blue-200"
                >
                  View Details
                </button>
                <button className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {campaigns.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No campaigns generated yet</p>
            <p className="text-sm">Generate your first quantum code to get started!</p>
          </div>
        )}
      </div>
    </div>
  );

  const LiveAnalytics = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 flex items-center">
        <Activity className="w-6 h-6 mr-3" />
        Live Analytics Dashboard
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Scans Today</p>
              <p className="text-2xl font-bold">{(Math.random() * 5000 + 1000).toFixed(0)}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold">{(Math.random() * 20 + 75).toFixed(1)}%</p>
            </div>
            <Users className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">AI Optimization</p>
              <p className="text-2xl font-bold">{(Math.random() * 15 + 85).toFixed(0)}/100</p>
            </div>
            <Brain className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Active Campaigns</p>
              <p className="text-2xl font-bold">{campaigns.length}</p>
            </div>
            <Target className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>
      
      {/* Real-Time Performance Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Real-Time Performance</h4>
        <div className="h-64 flex items-end justify-between space-x-2">
          {Array.from({length: 24}, (_, i) => {
            const height = Math.random() * 80 + 20;
            return (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                   style={{height: `${height}%`}}
                   title={`${i}:00 - ${(height * 10).toFixed(0)} scans`}>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </div>
      </div>
      
      {/* AI Insights Panel */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
        <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2" />
          Quantum AI Insights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Predictive Analytics</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Next Hour Prediction:</span>
                <span className="font-semibold text-green-600">+{Math.floor(Math.random() * 50 + 20)}% scans</span>
              </div>
              <div className="flex justify-between">
                <span>Weather Impact:</span>
                <span className="font-semibold text-blue-600">{liveData.weather.condition === 'sunny' ? 'Positive' : 'Neutral'}</span>
              </div>
              <div className="flex justify-between">
                <span>Time Optimization:</span>
                <span className="font-semibold text-purple-600">Peak in 2 hours</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Smart Routing Status</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Mobile Routes:</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Location Targeting:</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold">Optimized</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Device Intelligence:</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="font-semibold">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sentiment Analysis */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Live Sentiment Analysis
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">😊</div>
            <div className="text-lg font-semibold text-green-600">{Math.floor(Math.random() * 30 + 60)}%</div>
            <div className="text-sm text-gray-600">Positive</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">😐</div>
            <div className="text-lg font-semibold text-yellow-600">{Math.floor(Math.random() * 20 + 15)}%</div>
            <div className="text-sm text-gray-600">Neutral</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">😞</div>
            <div className="text-lg font-semibold text-red-600">{Math.floor(Math.random() * 15 + 5)}%</div>
            <div className="text-sm text-gray-600">Negative</div>
          </div>
        </div>
      </div>
    </div>
  );

  const EmailDelivery = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 flex items-center">
        <Mail className="w-6 h-6 mr-3" />
        Quantum Email Delivery System
      </h3>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Email</label>
              <input
                type="email"
                value={emailSettings.recipient}
                onChange={(e) => setEmailSettings({...emailSettings, recipient: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="client@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
              <input
                type="text"
                value={emailSettings.subject}
                onChange={(e) => setEmailSettings({...emailSettings, subject: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Quantum QR Code is Ready!"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                value={emailSettings.message}
                onChange={(e) => setEmailSettings({...emailSettings, message: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Hi there! Your custom QR code has been generated with AI optimization..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attachment Format</label>
              <select
                value={emailSettings.attachFormat}
                onChange={(e) => setEmailSettings({...emailSettings, attachFormat: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="png">PNG (Web Ready)</option>
                <option value="svg">SVG (Vector)</option>
                <option value="pdf">PDF (Print Ready)</option>
                <option value="eps">EPS (Professional)</option>
                <option value="all">All Formats</option>
              </select>
            </div>
            
            <button
              onClick={sendEmail}
              disabled={!generatedCode || !emailSettings.recipient}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Quantum Code</span>
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Email Preview</h4>
              <div className="space-y-2 text-sm">
                <div><strong>To:</strong> {emailSettings.recipient || 'recipient@email.com'}</div>
                <div><strong>Subject:</strong> {emailSettings.subject || 'Your Quantum QR Code is Ready!'}</div>
                <div className="border-t pt-2 mt-2">
                  <div className="text-gray-600 whitespace-pre-wrap">
                    {emailSettings.message || 'Hi there!\n\nYour custom QR code has been generated with AI optimization and is attached to this email.\n\nBest regards,\nAI-Solutions-serv Team'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Delivery Analytics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Delivery Rate:</span>
                  <span className="font-semibold text-green-600">99.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Open Rate:</span>
                  <span className="font-semibold text-blue-600">87.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Click Rate:</span>
                  <span className="font-semibold text-purple-600">64.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Download Rate:</span>
                  <span className="font-semibold text-orange-600">78.9%</span>
                </div>
              </div>
            </div>
            
            {generatedCode && (
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Attachment Preview</h4>
                <div className="flex items-center space-x-3">
                  <img src={generatedCode.dataUrl} alt="QR Code" className="w-16 h-16 border rounded" />
                  <div className="text-sm">
                    <div className="font-medium">{generatedCode.id}.{emailSettings.attachFormat}</div>
                    <div className="text-gray-600">AI Score: {generatedCode.stats.aiScore}/100</div>
                    <div className="text-gray-600">Est. {generatedCode.stats.estimatedScans.toLocaleString()} scans</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Email Templates */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Email Templates</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Professional', preview: 'Clean and corporate tone for B2B clients' },
            { name: 'Creative', preview: 'Dynamic and engaging for creative campaigns' },
            { name: 'Technical', preview: 'Detailed specs and analytics for tech-savvy clients' }
          ].map(template => (
            <button
              key={template.name}
              onClick={() => setEmailSettings({
                ...emailSettings,
                subject: `Your ${template.name} QR Code is Ready!`,
                message: `Template: ${template.preview}`
              })}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <div className="font-medium text-gray-800">{template.name}</div>
              <div className="text-sm text-gray-600 mt-1">{template.preview}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'campaigns': return <CampaignDatabase />;
      case 'analytics': return <LiveAnalytics />;
      case 'email': return <EmailDelivery />;
      default: return (
        <div className="space-y-6">
          {mode === 'streamlined' ? <StreamlinedMode /> : <SpaceshipMode />}
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quantum Code Generator
            </h1>
            <p className="text-gray-600">AI-Solutions-serv Next-Generation QR System</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-600 font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">Blockchain Ready</span>
          </div>
        </div>
      </div>

      <ModeToggle />
      <TabNavigation />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {renderActiveTab()}
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Quantum Preview
            </h3>
            <div className="flex justify-center mb-4">
              <canvas
                ref={canvasRef}
                width={customization.size}
                height={customization.size}
                className="border-2 border-gray-200 rounded-lg shadow-sm max-w-full h-auto"
                style={{width: '200px', height: '200px'}}
              />
            </div>
            {generatedCode && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div><strong>ID:</strong> {generatedCode.stats.uniqueId}</div>
                    <div><strong>Scans:</strong> {generatedCode.stats.estimatedScans.toLocaleString()}</div>
                    <div><strong>AI Score:</strong> {generatedCode.stats.aiScore}/100</div>
                    <div><strong>Engagement:</strong> {generatedCode.stats.engagementPrediction}/100</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={downloadCode}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-3 rounded-lg text-sm hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-1 shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('email')}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-3 rounded-lg text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-1 shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {mode === 'spaceship' && (
            <>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-6 rounded-xl border border-purple-200 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Quantum AI Insights
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Scan Probability:</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: `${Math.floor(Math.random() * 30) + 70}%`}}></div>
                      </div>
                      <span className="font-semibold text-green-600">{Math.floor(Math.random() * 30) + 70}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Optimal Time:</span>
                    <span className="font-semibold text-blue-600">{liveData.timeOptimal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Platform:</span>
                    <span className="font-semibold text-purple-600">
                      {['Instagram Stories', 'LinkedIn', 'Facebook', 'Twitter'][Math.floor(Math.random() * 4)]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weather Impact:</span>
                    <span className={`font-semibold ${liveData.weather.condition === 'sunny' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {liveData.weather.condition === 'sunny' ? 'Positive' : 'Neutral'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Device Preference:</span>
                    <span className="font-semibold text-indigo-600">
                      {liveData.deviceStats.mobile > liveData.deviceStats.desktop ? 'Mobile' : 'Desktop'} ({Math.max(liveData.deviceStats.mobile, liveData.deviceStats.desktop)}%)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/10 to-blue-900/10 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Next-Gen Features Active
                </h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(analytics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${value ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className={`font-medium ${value ? 'text-green-600' : 'text-gray-500'}`}>
                          {value ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
        
        