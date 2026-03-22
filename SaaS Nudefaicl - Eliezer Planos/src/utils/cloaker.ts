// Device and location cloaking utilities
export const isMobileDevice = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 
    'windows phone', 'opera mini', 'iemobile', 'wpdesktop'
  ];
  
  // Check user agent for mobile keywords
  const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));
  
  // Check screen size (mobile/tablet typically < 1024px width)
  const isMobileScreen = window.innerWidth <= 1024;
  
  // Check touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return isMobileUA || (isMobileScreen && isTouchDevice);
};

export const getBrazilianLocation = async (): Promise<boolean> => {
  try {
    // Try multiple IP geolocation services for reliability
    const services = [
      'https://ipapi.co/country_code/',
      'https://api.country.is/',
      'https://ipinfo.io/country'
    ];
    
    for (const service of services) {
      try {
        const response = await fetch(service, { 
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          let countryCode = '';
          
          if (service.includes('country.is')) {
            const data = await response.json();
            countryCode = data.country;
          } else {
            countryCode = await response.text();
          }
          
          return countryCode.trim().toUpperCase() === 'BR';
        }
      } catch (error) {
        console.warn(`Service ${service} failed:`, error);
        continue;
      }
    }
    
    // Fallback: check timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const brazilianTimezones = [
      'America/Sao_Paulo',
      'America/Manaus',
      'America/Fortaleza',
      'America/Recife',
      'America/Bahia',
      'America/Cuiaba',
      'America/Campo_Grande',
      'America/Porto_Velho',
      'America/Boa_Vista',
      'America/Rio_Branco'
    ];
    
    return brazilianTimezones.includes(timezone);
  } catch (error) {
    console.warn('Location check failed:', error);
    // Default to true to avoid blocking legitimate users
    return true;
  }
};

export const shouldRedirect = async (): Promise<boolean> => {
  // Check if user is on mobile device
  if (!isMobileDevice()) {
    console.log('Non-mobile device detected, redirecting...');
    return true;
  }
  
  // Check if user is in Brazil
  const isInBrazil = await getBrazilianLocation();
  if (!isInBrazil) {
    console.log('Non-Brazilian location detected, redirecting...');
    return true;
  }
  
  return false;
};

export const redirectToFallback = (): void => {
  const fallbackUrl = 'https://www.robertodiasduarte.com.br/prompt-library-guia-completo-para-desenvolvimento-agil-com-ia/';
  window.location.replace(fallbackUrl);
};