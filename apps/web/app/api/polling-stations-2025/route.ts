import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import LegacyPart2025 from '@/lib/models/LegacyPart2025';
import { withApiProtection } from '@/lib/api-middleware';

async function handleGET() {
  try {
    await connectDB();

    // Fetch all polling stations from 2025 data (not filtered by AC)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pollingStations = await (LegacyPart2025 as any).find({})
      .sort({ acNo: 1, partNo: 1 })
      .select({ acNo: 1, partNo: 1, partNameV1: 1, partNameTn: 1, localityV1: 1, localityTn: 1 })
      .lean()
      .exec();

    return NextResponse.json({
      success: true,
      data: pollingStations,
    });
  } catch (error) {
    console.error('Polling stations 2025 fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred while fetching polling stations',
      },
      { status: 500 }
    );
  }
}

// Export with HMAC protection
export const GET = withApiProtection(handleGET);
