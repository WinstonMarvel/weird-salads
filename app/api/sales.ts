import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Represents the data structure of the response.
 */
type ResponseData = {
  message: string;
};

/**
 * Handles requests to the API endpoint.
 * @param req - The incoming request object.
 * @param res - The response object.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {

    res.status(200).json({ message: 'Hello from Next.js!' });
  } catch (error) {

    // todo: Typechecking for errors that are not of  type Error

    console.error('Error handling API request:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
