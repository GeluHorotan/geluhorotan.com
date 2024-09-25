import { NextResponse, NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if (!token || token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'Not authorized!' }, { status: 401 });
  }
  revalidatePath(`/`);
  revalidatePath(`/project/[projectSlug]`);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
