import React, { useState } from 'react';
import { Send, Sparkles, Copy, RefreshCw } from 'lucide-react';
import GeneratedTweet from './GeneratedTweet';

interface FormData {
  topic: string;
  tone: string;
  audience: string;
  hashtags: string;
}

const TweetGenerator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    tone: 'Professional',
    audience: '',
    hashtags: ''
  });
  
  const [generatedTweet, setGeneratedTweet] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const toneOptions = ['Professional', 'Casual', 'Motivational', 'Informative'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateTweet = async () => {
    if (!formData.topic.trim()) {
      setError('Please enter a topic for your tweet');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call to Gemini (replace with actual API integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock generated tweet (replace with actual Gemini API response)
      const mockTweet = `🚀 ${formData.topic} is revolutionizing the way we think about innovation! ${formData.tone === 'Motivational' ? 'Let\'s embrace the future together!' : 'Here\'s what you need to know:'} 
      
${formData.audience ? `Perfect for ${formData.audience}` : 'Essential insights for everyone'} 
      
${formData.hashtags ? formData.hashtags.split(',').map(tag => `#${tag.trim()}`).join(' ') : '#Innovation #Technology #Future'}`;

      setGeneratedTweet(mockTweet);
    } catch (err) {
      setError('Failed to generate tweet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateTweet();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Content Creation</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-900 via-primary-700 to-secondary-900 bg-clip-text text-transparent">
          Generate Perfect Tweets
        </h1>
        
        <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into engaging tweets with our advanced AI. 
          Create content that resonates with your audience in seconds.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="card animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Send className="w-6 h-6 mr-3 text-primary-600" />
            Tweet Details
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-secondary-700 mb-2">
                Topic *
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="What's your tweet about?"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="tone" className="block text-sm font-semibold text-secondary-700 mb-2">
                Tone
              </label>
              <div className="relative">
                <select
                  id="tone"
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="select-field"
                >
                  {toneOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="audience" className="block text-sm font-semibold text-secondary-700 mb-2">
                Target Audience
              </label>
              <input
                type="text"
                id="audience"
                name="audience"
                value={formData.audience}
                onChange={handleInputChange}
                placeholder="e.g., entrepreneurs, developers, marketers"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="hashtags" className="block text-sm font-semibold text-secondary-700 mb-2">
                Hashtags
              </label>
              <input
                type="text"
                id="hashtags"
                name="hashtags"
                value={formData.hashtags}
                onChange={handleInputChange}
                placeholder="innovation, tech, startup (comma separated)"
                className="input-field"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Tweet</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Generated Tweet Section */}
        <div className="card animate-slide-up">
          <GeneratedTweet tweet={generatedTweet} isLoading={isLoading} />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
          <p className="text-secondary-600">Advanced AI technology creates engaging, relevant content tailored to your needs.</p>
        </div>
        
        <div className="text-center p-6">
          <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
          <p className="text-secondary-600">Generate professional tweets in seconds, not hours. Perfect for busy content creators.</p>
        </div>
        
        <div className="text-center p-6">
          <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Copy className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-secondary-600">Simple interface with powerful customization options for any audience or tone.</p>
        </div>
      </div>
    </div>
  );
};

export default TweetGenerator;