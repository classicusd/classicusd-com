import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121412',
          padding: '60px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#33FD99',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#121412',
              }}
            >
              $
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Classic USD
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#33FD99',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          $USC
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '28px',
            color: '#A0A0A0',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          The First Fiat-Backed Stablecoin on Ethereum Classic
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: '#666666',
            fontSize: '20px',
          }}
        >
          <span>classicusd.com</span>
          <span>•</span>
          <span>Issued by Brale</span>
          <span>•</span>
          <span>NMLS #2376957</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
