import React, { useState } from 'react';
import { Copy, Check, Twitter, RefreshCw } from 'lucide-react';

interface GeneratedTweetProps {
  tweet: string;
  isLoading: boolean;
}

const GeneratedTweet: React.FC<GeneratedTweetProps> = ({ tweet, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tweet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(twitterUrl, '_blank');
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Twitter className="w-6 h-6 mr-3 text-primary-600" />
          Generated Tweet
        </h2>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <RefreshCw className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
            <p className="text-secondary-600">Creating your perfect tweet...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tweet) {
    return (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Twitter className="w-6 h-6 mr-3 text-primary-600" />
          Generated Tweet
        </h2>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Twitter className="w-10 h-10 text-secondary-400" />
            </div>
            <p className="text-secondary-600">Your generated tweet will appear here</p>
            <p className="text-sm text-secondary-400 mt-2">Fill out the form and click "Generate Tweet" to get started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Twitter className="w-6 h-6 mr-3 text-primary-600" />
        Generated Tweet
      </h2>
      
      <div className="flex-1 flex flex-col">
        <div className="bg-white border border-secondary-200 rounded-xl p-6 mb-6 flex-1">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">N</span>
            </div>
            <div>
              <div className="font-semibold text-secondary-900">Nexora</div>
              <div className="text-secondary-500 text-sm">@nexora_ai</div>
            </div>
          </div>
          
          <div className="text-secondary-900 whitespace-pre-wrap leading-relaxed">
            {tweet}
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-secondary-100">
            <div className="text-sm text-secondary-500">
              {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="text-sm text-secondary-500">
              {tweet.length}/280 characters
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={copyToClipboard}
            className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
          
          <button
            onClick={shareOnTwitter}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Twitter className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedTweet;