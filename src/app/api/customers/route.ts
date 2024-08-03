import { NextResponse } from 'next/server';

const API_BASE_URL = 'http://165.227.97.62:8000/CRUD/Mongodb APIs/';

export async function GET() {
  const response = await fetch(`${API_BASE_URL}read`);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch(`${API_BASE_URL}create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const response = await fetch(`${API_BASE_URL}update`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const response = await fetch(`${API_BASE_URL}delete/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return NextResponse.json(data);
}
