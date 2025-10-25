const axios = require('axios');
const users = require('../models/userModel');

exports.getNews = async (req, res) => {
  const preferences = {};
  const { topics = ['technology'], sources = [], language = 'en' } = preferences;

  // Build dynamic query
  const query = topics.join(' OR ');
  const sourcesParam = sources.join(',');

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        sources: sourcesParam || undefined,
        language,
        sortBy: 'publishedAt',
        apiKey: process.env.NEWS_API_KEY,
        pageSize: 10,
      },
    });

    res.status(200).json({
      status: 'success',
      totalResults: response.data.totalResults,
      articles: response.data.articles,
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch news articles',
      details: error.response?.data || error.message,
    });
  }
};

exports.getTopHeadlines = async (req, res, next) => {
  try {
    // Accept query params from client, with sensible defaults
    const {
      country = 'us',
      category,
      q,
      pageSize = 20,
      page = 1,
    } = req.query;

  

    const params = {
      apiKey: process.env.NEWS_API_KEY,
      country,
      pageSize,
      page,
    };
    if (category) params.category = category;
    if (q) params.q = q;

    const response = await axios.get('https://newsapi.org/v2/top-headlines', { params, timeout: 5000 });

    // Optionally sanitize or trim large fields before sending to client
    const payload = {
      totalResults: response.data.totalResults,
      articles: response.data.articles.map(a => ({
        source: a.source,
        author: a.author,
        title: a.title,
        description: a.description,
        url: a.url,
        urlToImage: a.urlToImage,
        publishedAt: a.publishedAt,
      })),
    };

    return res.json({ status: 'ok', source: 'newsapi', ...payload });
  } catch (err) {
    // NewsAPI returns non-2xx in data; axios throws - capture details
    if (err.response) {
      // Bad response from NewsAPI
      const { status, data } = err.response;
      return res.status(status).json({ status: 'error', message: data.message || 'NewsAPI error', raw: data });
    }
    // Network/timeout/other
    next(err);
}
};
