import { SlideProvider } from './context/SlideContext'
import Navigation from './components/Navigation'
import CoverSlide from './slides/CoverSlide'
import AgendaSlide from './slides/AgendaSlide'
import OpportunitySlide from './slides/OpportunitySlide'
import OpportunitySlideV2 from './slides/OpportunitySlideV2'
import IntentSlide from './slides/IntentSlide'
import ScopeSlide from './slides/ScopeSlide'
import ApproachSlide from './slides/ApproachSlide'
import PresentersSlide from './slides/PresentersSlide'
import GovernanceSlide from './slides/GovernanceSlide'
import ThankYouSlide from './slides/ThankYouSlide'
import CustomerCoverSlide from './slides/CustomerCoverSlide'
import CustomerIntroSlide from './slides/CustomerIntroSlide'
import CustomerGoalsSlide from './slides/CustomerGoalsSlide'
import CustomerCommitmentSlide from './slides/CustomerCommitmentSlide'
import CustomerNextStepsSlide from './slides/CustomerNextStepsSlide'
import SelectorSlide from './slides/SelectorSlide'
import AppendixEmailSlide from './slides/AppendixEmailSlide'
import SpeakerInviteSlide from './slides/SpeakerInviteSlide'

const TOTAL = 21

export default function GhcpApp() {
  return (
    <SlideProvider totalSlides={TOTAL} project="ghcp">
      <Navigation />
      <div className="deck">
        <SelectorSlide />
        <CoverSlide />
        <AgendaSlide />
        <OpportunitySlide />
        <OpportunitySlideV2 />
        <IntentSlide />
        <ScopeSlide />
        <ApproachSlide />
        <PresentersSlide />
        <GovernanceSlide />
        <ThankYouSlide />
        <SpeakerInviteSlide />
        <CustomerCoverSlide />
        <CustomerIntroSlide />
        <CustomerGoalsSlide />
        <ApproachSlide index={15} />
        <PresentersSlide index={16} />
        <CustomerCommitmentSlide />
        <CustomerNextStepsSlide />
        <ThankYouSlide index={19} />
        <AppendixEmailSlide />
      </div>
    </SlideProvider>
  )
}
