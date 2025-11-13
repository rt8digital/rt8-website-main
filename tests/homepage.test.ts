import { test, expect } from '@playwright/test';

test('homepage has title and heading', async ({ page }) => {
  await page.goto('/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/RT8/);
  
  // Check for key elements on the page
  await expect(page.getByText('RT8 ROTATE GROUP')).toBeVisible();
});