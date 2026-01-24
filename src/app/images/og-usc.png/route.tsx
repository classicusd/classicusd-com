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
          backgroundColor: '#121412',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient effects */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(51, 253, 153, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-300px',
            right: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(51, 253, 153, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(51, 253, 153, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 253, 153, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '60px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left side - Text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              paddingRight: '40px',
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(51, 253, 153, 0.1)',
                  border: '1px solid rgba(51, 253, 153, 0.3)',
                  color: '#33FD99',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                US Regulated • Fully Backed
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Classic USD
            </div>

            {/* Ticker */}
            <div
              style={{
                fontSize: '36px',
                color: '#33FD99',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}
            >
              $USC
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: '28px',
                color: '#A0A0A0',
                marginBottom: '40px',
                lineHeight: 1.4,
              }}
            >
              The US Dollar for Ethereum Classic
            </div>

            {/* CTA Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  backgroundColor: '#33FD99',
                  color: '#121412',
                  fontSize: '22px',
                  fontWeight: 'bold',
                }}
              >
                GET USC
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* URL */}
            <div
              style={{
                marginTop: '32px',
                fontSize: '20px',
                color: '#666666',
              }}
            >
              classicusd.com
            </div>
          </div>

          {/* Right side - Coin visualization */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Outer glow ring */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(51, 253, 153, 0.2) 0%, transparent 70%)',
              }}
            />

            {/* Coin shadow */}
            <div
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                transform: 'translateY(20px)',
                filter: 'blur(30px)',
              }}
            />

            {/* Main coin */}
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                backgroundColor: '#33FD99',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(51, 253, 153, 0.4), inset 0 -8px 20px rgba(0, 0, 0, 0.1)',
                position: 'relative',
              }}
            >
              {/* Coin edge ring */}
              <div
                style={{
                  position: 'absolute',
                  width: '290px',
                  height: '290px',
                  borderRadius: '50%',
                  border: '4px solid rgba(18, 20, 18, 0.2)',
                }}
              />

              {/* Inner circle */}
              <div
                style={{
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  border: '6px solid #121412',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Dollar sign with vertical bar styling */}
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
                      width: '14px',
                      height: '35px',
                      backgroundColor: '#121412',
                      marginBottom: '-14px',
                      borderRadius: '2px',
                    }}
                  />
                  {/* S symbol */}
                  <span
                    style={{
                      fontSize: '140px',
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
                      width: '14px',
                      height: '35px',
                      backgroundColor: '#121412',
                      marginTop: '-14px',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            color: '#555555',
            fontSize: '16px',
          }}
        >
          <span>Issued by Brale</span>
          <span>•</span>
          <span>NMLS #2376957</span>
          <span>•</span>
          <span>1:1 USD Backed</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
