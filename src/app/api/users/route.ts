import { NextResponse } from 'next/server';

const API_URL = 'http://165.227.97.62:8000/CRUD/registrations/?skip=0&limit=100';

export async function GET() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}