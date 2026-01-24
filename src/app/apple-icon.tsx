import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121412',
          borderRadius: '36px',
        }}
      >
        {/* USC Coin */}
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            backgroundColor: '#33FD99',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(51, 253, 153, 0.3)',
          }}
        >
          {/* Inner ring for coin effect */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '3px solid #121412',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                  width: '6px',
                  height: '14px',
                  backgroundColor: '#121412',
                  marginBottom: '-6px',
                }}
              />
              {/* S symbol */}
              <span
                style={{
                  fontSize: '56px',
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
                  width: '6px',
                  height: '14px',
                  backgroundColor: '#121412',
                  marginTop: '-6px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
