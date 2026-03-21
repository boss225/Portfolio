'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { contact, siteConfig } from '@/data/portfolio';

type Message = {
  id: string;
  sender: 'ai' | 'user';
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: 'init',
  sender: 'ai',
  text: "Hello! I'm Vinh's AI Assistant. 🤖 I can answer questions about his skills, experience, and projects. Or just say hi! How can I help you today?",
};

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input.trim() };
    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Format messages for the API
      const apiMessages = currentMessages
        .filter(m => m.id !== 'init') // Skip initial greeting context to save tokens if preferred, or we can keep it for context natively.
        .map(m => ({
          role: m.sender === 'ai' ? 'assistant' : 'user',
          content: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) throw new Error('API request failed');

      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: data.reply }]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        sender: 'ai', 
        text: "I'm having a bit of trouble connecting to my AI brain right now. 🧠 Please try again later or email Vinh directly!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="contact" className="py-18 px-30 mx-auto relative">
      <div className="section-aura" aria-hidden="true" />

      <div className="glass-panel rounded-2xl p-12 relative overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none"
          style={{ background: 'rgba(187,158,255,0.20)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 blur-[120px] rounded-full animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] [animation-delay:2s] pointer-events-none"
          style={{ background: 'rgba(0,241,254,0.15)' }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative items-center">
          {/* Left – Info */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Let&apos;s Build the <br />
              <span style={{ color: 'var(--color-secondary)' }}>Horizon</span> Together
            </h2>
            <p className="mb-12 leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
              I&apos;m currently based in <strong style={{ color: 'var(--color-secondary)' }}>{siteConfig.location}</strong> and open to innovative frontend
              opportunities. Ask my AI assistant anything, or use the links below to connect directly!
            </p>
            <div className="space-y-6">
              {contact.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background:
                        item.icon === 'mail' ? 'rgba(187,158,255,0.20)' : 'rgba(0,241,254,0.20)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background =
                        item.icon === 'mail'
                          ? 'var(--color-primary)'
                          : 'var(--color-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background =
                        item.icon === 'mail'
                          ? 'rgba(187,158,255,0.20)'
                          : 'rgba(0,241,254,0.20)';
                    }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium hover:underline"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium" style={{ color: 'var(--color-on-surface)' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – AI Chat */}
          <div 
            className="flex flex-col h-[450px] rounded-xl overflow-hidden glass-panel relative z-20" 
            style={{ 
              border: '1px solid rgba(0,241,254,0.3)',
              boxShadow: '0 0 40px rgba(0,241,254,0.1)'
            }}
          >
            {/* Chat Header */}
            <div 
              className="p-4 border-b flex items-center gap-3 backdrop-blur-md" 
              style={{ borderColor: 'rgba(0,241,254,0.1)', background: 'rgba(0,241,254,0.05)' }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center relative" 
                style={{ background: 'var(--color-surface)', border: '2px solid var(--color-secondary)' }}
              >
                <span className="material-symbols-outlined animate-pulse" style={{ color: 'var(--color-secondary)' }}>robot_2</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[var(--color-surface)]"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wide" style={{ color: 'var(--color-on-surface)' }}>AI Assistant</h3>
                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--color-secondary)' }}>Online</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                    }`}
                    style={{
                      background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--color-surface-container-high)',
                      color: msg.sender === 'user' ? 'var(--color-on-primary)' : 'var(--color-on-surface)',
                      border: msg.sender === 'ai' ? '1px solid rgba(187,158,255,0.1)' : 'none'
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div 
                    className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-none text-sm glass-panel flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: 'var(--color-secondary)' }}></span>
                    <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.15s]" style={{ background: 'var(--color-secondary)' }}></span>
                    <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.3s]" style={{ background: 'var(--color-secondary)' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form 
              onSubmit={handleChatSubmit} 
              className="p-3 border-t flex gap-2" 
              style={{ borderColor: 'rgba(187,158,255,0.1)', background: 'var(--color-surface-container-high)' }}
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="flex-1 bg-transparent border-none text-sm outline-none px-3 py-2 font-medium"
                style={{ color: 'var(--color-on-surface)' }}
                autoComplete="off"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2 w-10 h-10 rounded-lg transition-transform active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:active:scale-100"
                style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
