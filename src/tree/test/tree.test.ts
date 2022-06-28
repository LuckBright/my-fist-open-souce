import { render } from '@testing-library/vue'
import STree from '../src/tree'

test('tree init render', () => {
  const { getByText } = render(STree)
  getByText('tree')
})
