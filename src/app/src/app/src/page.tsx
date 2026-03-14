"use client";

import React, { useState } from 'react';
import { Download, Link as LinkIcon, Smartphone, Video } from 'lucide-react';

export default function VideoDownloader() {
  const [url, setUrl] = useState('');

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans p-6 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="bg-gradient-to-tr from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
          <Download size={32} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">محمل الفيديوهات الذكي</h1>
        <p className="text-gray-400 text-sm">سرعة، دقة، وسهولة في التحميل</p>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-md bg-[#1a1a1a] p-1 rounded-3xl border border-white/10 shadow-2xl">
        <div className="flex items-center p-2">
          <div className="pl-3 text-gray-500">
            <LinkIcon size={20} />
          </div>
          <input 
            type="text" 
            placeholder="صق رابط الفيديو هنا..."
            className="w-full bg-transparent border-none outline-none p-3 text-white placeholder:text-gray-600"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>

      {/* Quality Options */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-6">
        {['720p', '1080p', '4K'].map((q) => (
          <button key={q} className="bg-[#1a1a1a] hover:bg-blue-600 transition-all py-3 rounded-2xl border border-white/5 text-sm font-medium">
            {q}
          </button>
        ))}
      </div>

      {/* Action Button */}
      <button className="w-full max-w-md mt-6 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-transform active:scale-95 flex items-center justify-center gap-2">
        <Download size={20} />
        بدء التحميل الآن
      </button>

      {/* Footer Info */}
      <div className="mt-12 flex gap-8 text-gray-500">
        <div className="flex flex-col items-center gap-1">
          <Video size={20} />
          <span className="text-[10px]">دقة عالية</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Smartphone size={20} />
          <span className="text-[10px]">دعم كامل للموبايل</span>
        </div>
      </div>
    </div>
  );
}
