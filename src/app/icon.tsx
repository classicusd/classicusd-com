import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#33FD99',
          borderRadius: '50%',
        }}
      >
        {/* Dollar sign with vertical bar styling like USC logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Top bar */}
          <div
            style={{
              width: '2px',
              height: '4px',
              backgroundColor: '#121412',
              marginBottom: '-2px',
            }}
          />
          {/* S symbol */}
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#121412',
              lineHeight: 1,
            }}
          >
            S
          </span>
          {/* Bottom bar */}
          <div
            style={{
              width: '2px',
              height: '4px',
              backgroundColor: '#121412',
              marginTop: '-2px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
