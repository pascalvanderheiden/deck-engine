import { SlideProvider } from '../../context/SlideContext'
import Navigation from '../../components/Navigation'
import ObjectiveSlide from './ObjectiveSlide'

const TOTAL = 1

export default function DevPlanApp() {
  return (
    <SlideProvider totalSlides={TOTAL}>
      <Navigation />
      <div className="deck">
        <ObjectiveSlide />
      </div>
    </SlideProvider>
  )
}
