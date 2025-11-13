import { test, expect } from '@playwright/test';

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if header navigation exists
  const header = page.locator('header');
  await expect(header).toBeVisible();
  
  // Check if footer exists
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});