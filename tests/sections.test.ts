import { test, expect } from '@playwright/test';

test('main sections are present', async ({ page }) => {
  await page.goto('/');
  
  // Check for hero section
  const heroSection = page.locator('[data-testid="hero-section"]');
  await expect(heroSection).toBeVisible();
  
  // Check for Why Choose Rotate section
  const whyChooseSection = page.locator('[data-testid="why-choose-rotate"]');
  await expect(whyChooseSection).toBeVisible();
  
  // Check for Meet The Team section
  const meetTeamSection = page.locator('[data-testid="meet-the-team"]');
  await expect(meetTeamSection).toBeVisible();
});