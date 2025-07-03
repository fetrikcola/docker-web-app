const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// CORS untuk semua origin (development)
app.use(cors());
app.use(express.json());

// Middleware untuk logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Data storage (dalam memory untuk demo)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin", createdAt: new Date().toISOString() },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", createdAt: new Date().toISOString() },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user", createdAt: new Date().toISOString() }
];

let posts = [
  { id: 1, title: "First Post", content: "This is the first post content", authorId: 1, createdAt: new Date().toISOString(), likes: 5 },
  { id: 2, title: "Second Post", content: "This is the second post content", authorId: 2, createdAt: new Date().toISOString(), likes: 3 },
  { id: 3, title: "Third Post", content: "This is the third post content", authorId: 1, createdAt: new Date().toISOString(), likes: 8 }
];

let analytics = {
  totalRequests: 0,
  endpoints: {},
  startTime: new Date().toISOString()
};

// Middleware untuk analytics
app.use((req, res, next) => {
  analytics.totalRequests++;
  if (!analytics.endpoints[req.path]) {
    analytics.endpoints[req.path] = 0;
  }
  analytics.endpoints[req.path]++;
  next();
});

// Helper function untuk generate ID
const generateId = (array) => {
  return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;
};

// Health check dengan informasi sistem
app.get('/health', (req, res) => {
  const uptime = process.uptime();
  const memoryUsage = process.memoryUsage();
  
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(uptime / 60)}m ${Math.floor(uptime % 60)}s`,
    memory: {
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`
    },
    version: process.version,
    platform: process.platform
  });
});

// API Dashboard
app.get('/api/dashboard', (req, res) => {
  res.json({
    message: "Welcome to Enhanced Backend API",
    version: "2.0.0",
    stats: {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalRequests: analytics.totalRequests,
      serverUptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    },
    endpoints: [
      "GET /api/dashboard - API information",
      "GET /api/users - Get all users",
      "POST /api/users - Create new user",
      "GET /api/users/:id - Get user by ID",
      "PUT /api/users/:id - Update user",
      "DELETE /api/users/:id - Delete user",
      "GET /api/posts - Get all posts",
      "POST /api/posts - Create new post",
      "GET /api/posts/:id - Get post by ID",
      "PUT /api/posts/:id/like - Like a post",
      "GET /api/analytics - Get API analytics",
      "GET /api/weather - Get weather info",
      "GET /api/quote - Get random quote"
    ],
    timestamp: new Date().toISOString()
  });
});

// Users endpoints
app.get('/api/users', (req, res) => {
  const { role, search } = req.query;
  let filteredUsers = users;

  if (role) {
    filteredUsers = filteredUsers.filter(user => user.role === role);
  }

  if (search) {
    filteredUsers = filteredUsers.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json({
    success: true,
    data: filteredUsers,
    count: filteredUsers.length,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/users', (req, res) => {
  const { name, email, role = 'user' } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required",
      timestamp: new Date().toISOString()
    });
  }

  const newUser = {
    id: generateId(users),
    name,
    email,
    role,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      timestamp: new Date().toISOString()
    });
  }

  // Get user's posts
  const userPosts = posts.filter(post => post.authorId === userId);

  res.json({
    success: true,
    data: {
      ...user,
      posts: userPosts,
      totalPosts: userPosts.length,
      totalLikes: userPosts.reduce((sum, post) => sum + post.likes, 0)
    },
    timestamp: new Date().toISOString()
  });
});

app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      timestamp: new Date().toISOString()
    });
  }

  const { name, email, role } = req.body;
  const updatedUser = {
    ...users[userIndex],
    ...(name && { name }),
    ...(email && { email }),
    ...(role && { role }),
    updatedAt: new Date().toISOString()
  };

  users[userIndex] = updatedUser;

  res.json({
    success: true,
    message: "User updated successfully",
    data: updatedUser,
    timestamp: new Date().toISOString()
  });
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      timestamp: new Date().toISOString()
    });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  res.json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser,
    timestamp: new Date().toISOString()
  });
});

// Posts endpoints
app.get('/api/posts', (req, res) => {
  const { authorId, sortBy = 'createdAt', order = 'desc' } = req.query;
  let filteredPosts = posts;

  if (authorId) {
    filteredPosts = filteredPosts.filter(post => post.authorId === parseInt(authorId));
  }

  // Add author information
  const postsWithAuthors = filteredPosts.map(post => {
    const author = users.find(u => u.id === post.authorId);
    return {
      ...post,
      author: author ? { id: author.id, name: author.name, email: author.email } : null
    };
  });

  // Sort posts
  postsWithAuthors.sort((a, b) => {
    if (sortBy === 'likes') {
      return order === 'desc' ? b.likes - a.likes : a.likes - b.likes;
    }
    if (sortBy === 'createdAt') {
      return order === 'desc' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0;
  });

  res.json({
    success: true,
    data: postsWithAuthors,
    count: postsWithAuthors.length,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/posts', (req, res) => {
  const { title, content, authorId } = req.body;

  if (!title || !content || !authorId) {
    return res.status(400).json({
      success: false,
      message: "Title, content, and authorId are required",
      timestamp: new Date().toISOString()
    });
  }

  const author = users.find(u => u.id === parseInt(authorId));
  if (!author) {
    return res.status(404).json({
      success: false,
      message: "Author not found",
      timestamp: new Date().toISOString()
    });
  }

  const newPost = {
    id: generateId(posts),
    title,
    content,
    authorId: parseInt(authorId),
    createdAt: new Date().toISOString(),
    likes: 0
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: {
      ...newPost,
      author: { id: author.id, name: author.name, email: author.email }
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
      timestamp: new Date().toISOString()
    });
  }

  const author = users.find(u => u.id === post.authorId);

  res.json({
    success: true,
    data: {
      ...post,
      author: author ? { id: author.id, name: author.name, email: author.email } : null
    },
    timestamp: new Date().toISOString()
  });
});

app.put('/api/posts/:id/like', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
      timestamp: new Date().toISOString()
    });
  }

  posts[postIndex].likes += 1;

  res.json({
    success: true,
    message: "Post liked successfully",
    data: posts[postIndex],
    timestamp: new Date().toISOString()
  });
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
  const topPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 3);
  const topUsers = users.map(user => ({
    ...user,
    postCount: posts.filter(post => post.authorId === user.id).length,
    totalLikes: posts.filter(post => post.authorId === user.id).reduce((sum, post) => sum + post.likes, 0)
  })).sort((a, b) => b.totalLikes - a.totalLikes);

  res.json({
    success: true,
    data: {
      server: {
        startTime: analytics.startTime,
        uptime: process.uptime(),
        totalRequests: analytics.totalRequests,
        endpointStats: analytics.endpoints
      },
      users: {
        total: users.length,
        byRole: users.reduce((acc, user) => {
          acc[user.role] = (acc[user.role] || 0) + 1;
          return acc;
        }, {}),
        topUsers: topUsers.slice(0, 3)
      },
      posts: {
        total: posts.length,
        totalLikes: posts.reduce((sum, post) => sum + post.likes, 0),
        topPosts: topPosts.map(post => ({
          id: post.id,
          title: post.title,
          likes: post.likes,
          author: users.find(u => u.id === post.authorId)?.name || 'Unknown'
        }))
      }
    },
    timestamp: new Date().toISOString()
  });
});

// Weather endpoint (mock data)
app.get('/api/weather', (req, res) => {
  const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'];
  const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Thunderstorm'];
  
  const weatherData = cities.map(city => ({
    city,
    temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
    condition: conditions[Math.floor(Math.random() * conditions.length)],
    humidity: Math.floor(Math.random() * 40) + 60, // 60-100%
    windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
    timestamp: new Date().toISOString()
  }));

  res.json({
    success: true,
    data: weatherData,
    timestamp: new Date().toISOString()
  });
});

// Random quote endpoint
app.get('/api/quote', (req, res) => {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json({
    success: true,
    data: {
      ...randomQuote,
      id: Math.floor(Math.random() * 1000),
      category: "motivational",
      timestamp: new Date().toISOString()
    },
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    availableEndpoints: [
      "GET /health",
      "GET /api/dashboard",
      "GET /api/users",
      "POST /api/users",
      "GET /api/posts",
      "POST /api/posts",
      "GET /api/analytics",
      "GET /api/weather",
      "GET /api/quote"
    ],
    timestamp: new Date().toISOString()
  });
});

// Endpoint tambahan untuk kebutuhan frontend awal
app.get('/api/hello', (req, res) => {
  res.json({ message: "🎉 Hello from the enhanced backend API!" });
});

// Bind ke 0.0.0.0 agar bisa diakses dari container lain
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Enhanced Backend API running on http://0.0.0.0:${PORT}`);
  console.log('📊 Dashboard available at: http://localhost:5000/api/dashboard');
  console.log('🔍 Health check at: http://localhost:5000/health');
  console.log('✨ Ready to receive requests...');
  console.log('==================================================');
});