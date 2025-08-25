import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get parameters from URL
    const title = searchParams.get('title') || '3Bit Studio';
    const subtitle = searchParams.get('subtitle') || 'Premier Digital Agency';
    const description = searchParams.get('description') || 'Web Development • Mobile Apps • UI/UX Design • AI Automation';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F0F23',
            background: 'linear-gradient(135deg, #0F0F23 0%, #1E1B4B 50%, #312E81 100%)',
            position: 'relative',
          }}
        >
          {/* Background Elements */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #8B5CF6, #3B82F6)',
              opacity: 0.1,
              top: '-300px',
              right: '-300px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'linear-gradient(225deg, #EC4899, #8B5CF6)',
              opacity: 0.1,
              bottom: '-200px',
              left: '-200px',
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 10,
              padding: '40px',
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
              }}
            >
              3Bit Studio
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: title.length > 40 ? '48px' : '64px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '20px',
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <h2
                style={{
                  fontSize: '32px',
                  color: '#A855F7',
                  marginBottom: '16px',
                  fontWeight: 'normal',
                }}
              >
                {subtitle}
              </h2>
            )}

            {/* Description */}
            <p
              style={{
                fontSize: '24px',
                color: '#E5E7EB',
                lineHeight: 1.4,
                maxWidth: '800px',
              }}
            >
              {description}
            </p>

            {/* Bottom accent */}
            <div
              style={{
                width: '200px',
                height: '4px',
                background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                borderRadius: '2px',
                marginTop: '40px',
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
