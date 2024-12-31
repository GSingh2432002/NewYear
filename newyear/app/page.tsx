import NewYearCelebration from '@/components/new_year_celebration';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function Home() {
  return (
    <div>
        <NewYearCelebration />
        <Analytics/>
        <SpeedInsights/>
    </div>
  )
}

