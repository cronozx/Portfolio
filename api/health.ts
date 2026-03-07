import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  res.status(200).json({ 
    message: 'Server is running!', 
    timestamp: new Date().toISOString() 
  });
}