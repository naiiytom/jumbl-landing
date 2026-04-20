import { useEffect, useState } from 'react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jumbl.app' +
  '&utm_source=unjumbl_landing&utm_medium=get_app_redirect&utm_campaign=app_install';

function detectPlatform(): 'ios' | 'android' | 'other' {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'other';
}

function PlayStoreButton() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-jumbl-charcoal text-white px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all shadow-xl shadow-jumbl-charcoal/20 flex flex-col items-start leading-none gap-1"
    >
      <span className="text-xs uppercase tracking-widest opacity-60">Get it on</span>
      <span>Google Play</span>
    </a>
  );
}

function IOSComingSoonButton() {
  return (
    <div className="bg-jumbl-gold/10 text-jumbl-gold px-8 py-4 rounded-2xl font-semibold border-2 border-jumbl-gold/20 flex flex-col items-start leading-none gap-1 cursor-not-allowed">
      <span className="text-xs uppercase tracking-widest opacity-60">iOS App</span>
      <span>Available Soon</span>
    </div>
  );
}

export default function GetApp() {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other' | null>(null);

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);
    if (detected === 'android') {
      window.location.href = PLAY_STORE_URL;
    }
  }, []);

  if (platform === 'android') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <p className="text-xl text-jumbl-charcoal font-inter">Redirecting you to Google Play…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-playfair font-bold text-jumbl-charcoal mb-6">
        Get Jumbl
      </h1>

      {platform === 'ios' ? (
        <>
          <p className="text-xl text-gray-600 font-inter mb-12 max-w-md leading-relaxed">
            The iOS app is coming soon. In the meantime, Jumbl is available on Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <IOSComingSoonButton />
            <PlayStoreButton />
          </div>
        </>
      ) : (
        <>
          <p className="text-xl text-gray-600 font-inter mb-12 max-w-md leading-relaxed">
            Your alabaster reading companion, available on Android. iOS coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PlayStoreButton />
            <IOSComingSoonButton />
          </div>
        </>
      )}
    </div>
  );
}
