import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for development
}));
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Health check endpoint for local development
app.get('/api/health', (req, res) => {
  res.json({ message: 'Local server is running!', timestamp: new Date().toISOString() });
});

// Local API endpoints for development
app.get('/api/projects', (req, res) => {
  res.json({
    message: 'Projects endpoint (local)',
    projects: [
      {
        id: 1,
        name: 'Culling Games',
        description: 'Battle Royal Minecraft plugin based off of the JJK manga.',
        stack: ['Java', 'Redis']
      },
      {
        id: 2, 
        name: 'Portfolio',
        description: 'My portfolio website with Express.js backend',
        stack: ['React', 'TypeScript', 'Express', 'Node.js']
      }
    ]
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    message: 'Contact information (local)',
    github: 'https://github.com/cronozx',
    email: 'contact@example.com'
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`🔧 API: http://localhost:${PORT}/api`);
});

export default app;