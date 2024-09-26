import { NextResponse, NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return Response.json({ message: 'Method not allowed!' }, { status: 405 });
  }
  const authorization = headers().get('authorization');

  if (!authorization || authorization !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'Not authorized!' }, { status: 401 });
  }
  revalidatePath('/', 'layout');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
