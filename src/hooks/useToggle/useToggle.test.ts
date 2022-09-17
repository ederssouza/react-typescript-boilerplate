import { renderHook } from '@testing-library/react-hooks'
import useToggle from './useToggle'

describe('useToggle | hook | integration test', () => {
  it('...', () => {
    const { result } = renderHook(useToggle)

    expect(result.current).toBe(true)
  })
})
