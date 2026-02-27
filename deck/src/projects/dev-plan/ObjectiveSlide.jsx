import Slide from '../../components/Slide'
import BottomBar from '../../components/BottomBar'
import styles from './ObjectiveSlide.module.css'

const pillars = [
  {
    icon: '🤝',
    title: 'Soft Skills',
    accent: 'var(--purple)',
    items: [
      { text: 'Learn the soft skills needed to be a Solution Engineer', highlight: true },
      { text: 'Reverse-shadow & shadow experienced SEs' },
      { text: 'Simulation exercises with real scenarios' },
      { text: 'Real customer work with guided support' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Hard Skills',
    accent: 'var(--accent)',
    items: [
      { text: 'Fundamental technical skills for the role', highlight: true },
      { text: 'Skills of tomorrow — AI, Agentic Engineering, platform thinking' },
      { text: 'Industry certifications & credentials' },
    ],
  },
  {
    icon: '🌐',
    title: 'Ecosystem',
    accent: 'var(--green)',
    items: [
      { text: 'Navigate a complex organization with confidence', highlight: true },
      { text: 'Create a safe and empowering environment for growth' },
    ],
  },
]

export default function ObjectiveSlide() {
  return (
    <Slide index={0} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`${styles.content} content-frame content-gutter`}>
        <h1 className={styles.title}>Objective</h1>
        <p className={styles.subtitle}>Three pillars to grow into a world-class Solution Engineer</p>

        <div className={styles.pillars}>
          {pillars.map(p => (
            <div key={p.title} className={styles.card} style={{ '--pillar-accent': p.accent }}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{p.icon}</span>
                <h2 className={styles.cardTitle}>{p.title}</h2>
              </div>
              <ul className={styles.cardList}>
                {p.items.map((it, i) => (
                  <li key={i} className={it.highlight ? styles.highlight : ''}>
                    {it.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <BottomBar />
    </Slide>
  )
}
