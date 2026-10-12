// lib/wow-cache.ts

const WOW_CACHE: any = {};

export function getFromWOWCache(key: string) {
  const entry = WOW_CACHE[key];
  if (!entry) return null;

  const now = Date.now();
  if (now > entry.expireAt) {
    delete WOW_CACHE[key];
    return null;
  }

  return entry.data;
}

export function saveToWOWCache(key: string, data: any, ttl: number) {
  WOW_CACHE[key] = {
    data,
    expireAt: Date.now() + ttl,
  };
}

