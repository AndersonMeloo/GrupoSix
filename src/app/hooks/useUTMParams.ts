/**
 * Gerenciar UTM params para rastreamento de campanhas de marketing.
 */

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { UTMParams } from '../types/index';
import { extractUTMFromURL, saveUTMParams, getUTMParams } from '../utils/utm';

export function useUTMParams() {
  const searchParams = useSearchParams();
  const [utmParams, setUTMParams] = useState<UTMParams>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const urlParams = extractUTMFromURL();
      
      if (Object.keys(urlParams).length > 0) {
        saveUTMParams(urlParams);
        setUTMParams(urlParams);
      } else {
        const storedParams = getUTMParams();
        setUTMParams(storedParams);
      }
    } catch (error) {
      console.warn('Erro ao processar UTM params:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchParams]);

  return {
    utmParams,
    isLoading,
  };
}
