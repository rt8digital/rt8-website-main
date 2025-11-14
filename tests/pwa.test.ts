import { test, expect } from '@playwright/test';

test.describe('PWA Functionality', () => {
  test('should register service worker', async ({ page }) => {
    await page.goto('/');

    // Wait for service worker to register
    const swRegistered = await page.evaluate(() => {
      return navigator.serviceWorker.ready.then(() => true).catch(() => false);
    });

    expect(swRegistered).toBe(true);
  });

  test('should have web app manifest', async ({ page }) => {
    await page.goto('/');

    // Check if manifest link exists
    const manifestLink = await page.locator('link[rel="manifest"]').count();
    expect(manifestLink).toBeGreaterThan(0);

    // Check manifest content
    const manifestResponse = await page.request.get('/site.webmanifest');
    expect(manifestResponse.ok()).toBe(true);

    const manifest = await manifestResponse.json();
    expect(manifest.name).toBe('RT8 Rotate Group');
    expect(manifest.short_name).toBe('RT8');
  });

  test('should be installable', async ({ page }) => {
    await page.goto('/');

    // Check for beforeinstallprompt event capability
    const isInstallable = await page.evaluate(() => {
      return 'onbeforeinstallprompt' in window;
    });

    expect(isInstallable).toBe(true);
  });

  test('should cache resources offline', async ({ page, context }) => {
    await page.goto('/');

    // Wait for service worker to be active
    await page.waitForFunction(() => {
      return navigator.serviceWorker.controller !== null;
    });

    // Set offline
    await context.setOffline(true);

    // Try to reload the page - should work from cache
    await page.reload();

    // Check if page loaded
    const title = await page.title();
    expect(title).toContain('RT8');
  });
});
