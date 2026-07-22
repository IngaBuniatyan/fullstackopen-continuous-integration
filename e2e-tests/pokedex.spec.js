const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('ivysaur', { exact: true })).toBeVisible()
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('a Pokemon page can be opened', async ({ page }) => {
  await page.goto('/')
  await page.getByText('ivysaur', { exact: true }).click()

  await expect(page).toHaveURL(/\/pokemon\/ivysaur$/)
  await expect(page.getByText('chlorophyll', { exact: true })).toBeVisible()
})
