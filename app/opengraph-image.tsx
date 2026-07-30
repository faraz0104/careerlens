import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: 60,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#ff7a33' }}>CareerLens</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>
            Free AI Resume Checker & Career Tools
          </div>
          <div style={{ fontSize: 28, color: '#f2e8dc' }}>
            ATS score, keyword gaps, interview prep, salary insights
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
