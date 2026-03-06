import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Contact information',
      github: 'https://github.com/cronozx',
      email: 'contact@example.com'
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}