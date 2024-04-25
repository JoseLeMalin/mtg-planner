
import { StatsCard } from '@/src/components/decks/StatCard'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
 
describe('Homepage', () => {
    
    // test('home component title', () => {
    //   render(<HomeComponent />)
    //   expect(screen.getByRole('heading', { level: 1, name: 'Your Activity:' })).toBeDefined()
    // })
    test('home component title', () => {
      render(<StatsCard   title={"the tile"} stat={"the stat"} />)
      expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
    })
})