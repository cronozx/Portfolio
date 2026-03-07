import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Projects endpoint',
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
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}