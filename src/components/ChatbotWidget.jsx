// MessageBubble.jsx
const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${isUser ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'} rounded-2xl px-4 py-2 shadow-sm`}>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        
        {message.sources && message.sources.length > 0 && (
          <SourcesList sources={message.sources} />
        )}

        {message.tokens && (
          <p className="text-xs text-gray-500 mt-1">
            {message.tokens} tokens · ${message.cost.toFixed(4)}
          </p>
        )}
      </div>
    </div>
  );
};

// SourcesList.jsx
const SourcesList = ({ sources }) => (
  <details className="mt-2 pt-2 border-t border-gray-200">
    <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-800">
      Sources ({sources.length})
    </summary>
    <div className="mt-2 space-y-1">
      {sources.map((source, i) => (
        <div key={i} className="text-xs bg-gray-50 p-2 rounded">
          <p className="font-medium text-gray-700">{source.source}</p>
          <p className="text-gray-600 mt-1">{source.content}</p>
          <p className="text-gray-500 mt-1">Relevance: {(source.relevance_score * 100).toFixed(0)}%</p>
        </div>
      ))}
    </div>
  </details>
);

// ChatHeader.jsx
const ChatHeader = ({ onClose }) => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
        <img src="images/profile_pic.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-semibold">Ask About Me</h3>
        <p className="text-xs text-blue-100">Powered by Claude</p>
      </div>
    </div>
    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

// ChatInput.jsx
const ChatInput = ({ value, onChange, onSend, isLoading }) => (
  <div className="p-4 bg-white border-t border-gray-200">
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSend()}
        placeholder="Ask a question..."
        disabled={isLoading}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        onClick={onSend}
        disabled={isLoading || !value.trim()}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </div>
  </div>
);

// Main ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const API_URL = 'https://mybot-production-e727.up.railway.app';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(response.status === 429 ? 'Rate limit reached. Please try again later.' : data.detail || 'Something went wrong');
        return;
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
        tokens: data.tokens_used,
        cost: data.estimated_cost
      }]);
    } catch (err) {
      setError('Failed to connect to the API. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 md:right-8 z-50">
      {!isOpen && (
        <div className="fixed right-8">
          <button onClick={() => { setIsOpen(true); setShowTooltip(false); }} className="relative group">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-blue-500/20 hover:ring-blue-500/40">
              <img src="images/chat.png" alt="Chat" className="max-w-full max-h-full object-contain" />
            </div>
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-2 animate-pulse">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  ask about me
                  <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            )}
          </button>
        </div>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] flex flex-col overflow-hidden border border-gray-200">
          <ChatHeader onClose={() => setIsOpen(false)} />

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <p className="text-sm">Ask me anything about my background, research, or interests!</p>
              </div>
            )}

            {messages.map((msg, idx) => <MessageBubble key={idx} message={msg} />)}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">{error}</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <ChatInput value={input} onChange={setInput} onSend={handleSend} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;