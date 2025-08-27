// LinkedIn API Integration Utilities
// Note: LinkedIn's official API requires authentication and has strict policies
// This file provides structure for future LinkedIn integration

class LinkedInAPI {
  constructor() {
    this.baseUrl = 'https://api.linkedin.com/v2';
    this.accessToken = null;
  }

  // Set access token for API calls
  setAccessToken(token) {
    this.accessToken = token;
  }

  // Fetch user profile posts
  async fetchUserPosts(userId = 'me') {
    if (!this.accessToken) {
      throw new Error('LinkedIn access token is required');
    }

    try {
      const response = await fetch(`${this.baseUrl}/posts?q=author&author=${userId}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`LinkedIn API error: ${response.status}`);
      }

      const data = await response.json();
      return this.transformLinkedInPosts(data.elements || []);
    } catch (error) {
      console.error('Error fetching LinkedIn posts:', error);
      throw error;
    }
  }

  // Transform LinkedIn API response to match our news format
  transformLinkedInPosts(posts) {
    return posts.map((post, index) => ({
      id: `linkedin_${post.id || index}`,
      title: this.extractTitle(post.commentary || post.text),
      date: new Date(post.createdAt || Date.now()).toISOString().split('T')[0],
      category: this.categorizePost(post),
      content: this.extractContent(post.commentary || post.text || ''),
      link: post.permalink || `https://linkedin.com/posts/${post.id}`,
      image: this.extractImage(post.content),
      tags: this.extractTags(post.commentary || post.text || ''),
      source: 'linkedin'
    }));
  }

  // Extract title from post text (first line or first 60 chars)
  extractTitle(text) {
    if (!text) return 'LinkedIn Update';
    const firstLine = text.split('\n')[0];
    return firstLine.length > 60 ? firstLine.substring(0, 60) + '...' : firstLine;
  }

  // Categorize post based on content
  categorizePost(post) {
    const text = (post.commentary || post.text || '').toLowerCase();
    
    if (text.includes('published') || text.includes('paper') || text.includes('journal')) {
      return 'Publication';
    } else if (text.includes('conference') || text.includes('workshop') || text.includes('presentation')) {
      return 'Conference';
    } else if (text.includes('award') || text.includes('recognition') || text.includes('achievement')) {
      return 'Award';
    } else if (text.includes('research') || text.includes('study') || text.includes('university')) {
      return 'Academic';
    }
    
    return 'Update';
  }

  // Extract main content
  extractContent(text) {
    if (!text) return '';
    // Remove hashtags and clean up text
    return text.replace(/#\w+/g, '').replace(/\s+/g, ' ').trim();
  }

  // Extract image from post content
  extractImage(content) {
    // LinkedIn API provides media in content.media array
    if (content && content.media && content.media.length > 0) {
      const media = content.media[0];
      return media.originalUrl || media.downloadUrl || null;
    }
    return null;
  }

  // Extract hashtags as tags
  extractTags(text) {
    if (!text) return [];
    const hashtags = text.match(/#\w+/g);
    return hashtags ? hashtags.map(tag => tag.substring(1)) : [];
  }
}

// Alternative: RSS/Web Scraping approach (for demonstration)
export const fetchLinkedInAlternative = async (profileUrl) => {
  // This is a placeholder for alternative approaches like:
  // 1. RSS feed if available
  // 2. Third-party services like RapidAPI LinkedIn scrapers
  // 3. Custom web scraping (be mindful of LinkedIn's ToS)
  
  console.log(`Alternative LinkedIn fetch for: ${profileUrl}`);
  
  // For now, return empty array - this would be implemented with actual service
  return [];
};

// GitHub-based news management
export const fetchNewsFromGitHub = async (owner, repo, label = 'news') => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?labels=${label}&state=open`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const issues = await response.json();
    
    return issues.map(issue => ({
      id: `github_${issue.number}`,
      title: issue.title,
      date: issue.created_at.split('T')[0],
      category: issue.labels.find(l => l.name !== 'news')?.name || 'Update',
      content: issue.body || '',
      link: issue.html_url,
      image: null,
      tags: issue.labels.map(label => label.name).filter(name => name !== 'news'),
      source: 'github'
    }));
  } catch (error) {
    console.error('Error fetching news from GitHub:', error);
    return [];
  }
};

export default LinkedInAPI;