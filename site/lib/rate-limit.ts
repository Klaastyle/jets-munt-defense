export function rateLimit(options: { max: number; windowMs: number }) {
  const ipCache = new Map<string, { count: number; expiresAt: number }>();

  return {
    check: (ip: string) => {
      const now = Date.now();
      const record = ipCache.get(ip);

      if (!record || record.expiresAt < now) {
        // First request or expired window
        ipCache.set(ip, { count: 1, expiresAt: now + options.windowMs });
        return { success: true };
      }

      if (record.count >= options.max) {
        return { success: false };
      }

      record.count += 1;
      return { success: true };
    },
  };
}

// Create a singleton instance for forms: 3 requests per 5 minutes
export const formRateLimiter = rateLimit({
  max: 3,
  windowMs: 5 * 60 * 1000,
});
