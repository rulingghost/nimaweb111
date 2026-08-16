import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, CheckCircle2, Cpu, Globe, ShieldCheck, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import { getCompanyInfo, getCompanyMilestones, getCompanyValues, aboutHeroImg } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

export default function About({ onOpenProposal }) {
  const { language, t } = useLanguage();
  const { content, getContent } = useContent();
  const activeContent = getContent ? getContent(language) : content;
  const localizedCompany = getCompanyInfo(language);
  const localizedMilestones = activeContent?.journey?.items || getCompanyMilestones(language);
  const localizedValues = getCompanyValues(language);

  const [activeYear, setActiveYear] = useState(
    localizedMilestones[localizedMilestones.length - 1]?.year || '2024+'
  );

  const visionTitle = activeContent?.visionMission?.visionTitle || t('about_vision_title');
  const visionDesc = activeContent?.visionMission?.visionDesc || t('about_vision_desc');
  const missionTitle = activeContent?.visionMission?.missionTitle || t('about_mission_title');
  const missionDesc = activeContent?.visionMission?.missionDesc || t('about_mission_desc');

  const standardsTitle = activeContent?.about?.standardsTitle || t('about_standards_title');
  const standardsSubtitle = activeContent?.about?.standardsSubtitle || t('about_standards_sub');
  const standardsList = activeContent?.about?.standardsList || [
    t('about_std1'),
    t('about_std2'),
    t('about_std3'),
    t('about_std4')
  ];

  return (
    <main>
      <PageHero 
        title={activeContent?.about?.title || t('about_hero_title')}
        subtitle={activeContent?.about?.subtitle || `${localizedCompany.name}, ${t('about_hero_sub')}`}
        image={aboutHeroImg}
        badgeText={activeContent?.about?.badge || t('about_badge')}
      />
      
      {/* Vision & Mission */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="split-layout">
            <motion.div 
              style={{ 
                display: 'flex', flexDirection: 'column', gap: '1.5rem', 
                padding: '3rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)', 
                border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' 
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'rgba(209, 47, 14, 0.1)', color: '#D12F0E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={32} />
              </div>
              <h2 className="display-title" style={{ fontSize: '2.25rem' }}>{visionTitle}</h2>
              <p className="regular-text" style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {visionDesc}
              </p>
            </motion.div>
            
            <motion.div 
              style={{ 
                display: 'flex', flexDirection: 'column', gap: '1.5rem', 
                padding: '3rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)', 
                border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' 
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'rgba(246, 195, 16, 0.15)', color: '#D12F0E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={32} />
              </div>
              <h2 className="display-title" style={{ fontSize: '2.25rem' }}>{missionTitle}</h2>
              <p className="regular-text" style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {missionDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Milestones / Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="badge-pill">
              <Sparkles size={14} /> {content?.journey?.badge || t('about_milestones_badge')}
            </div>
            <h2 className="display-title">{content?.journey?.title || t('about_milestones_title')}</h2>
            <p className="display-subtitle">{content?.journey?.subtitle || t('about_milestones_sub')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`, gap: '1rem', marginBottom: '3rem' }}>
            {localizedMilestones.map((m) => (
              <button
                key={m.year}
                onClick={() => setActiveYear(m.year)}
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  background: activeYear === m.year ? 'var(--text-main)' : 'var(--bg-card)',
                  color: activeYear === m.year ? 'var(--bg-main)' : 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeYear === m.year ? '0 10px 25px rgba(0,0,0,0.2)' : 'none'
                }}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          {(() => {
            const currentM = localizedMilestones.find(m => m.year === activeYear) || localizedMilestones[0];
            if (!currentM) return null;
            return (
              <div style={{ 
                padding: '3rem', 
                background: 'var(--bg-secondary)', 
                borderRadius: 'var(--radius-xl)', 
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem'
              }}>
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: '700', color: '#D12F0E' }}>{t('about_milestone_tag')} — {currentM.year}</span>
                  <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: '0.5rem 0 1rem' }}>{currentM.title}</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', lineHeight: '1.6' }}>{currentM.desc}</p>
                </div>
                <div style={{ fontSize: '4rem', fontWeight: '900', opacity: 0.1, fontFamily: 'var(--font-display)' }}>
                  {currentM.year}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header center">
            <h2 className="display-title">{t('about_values_title')}</h2>
            <p className="display-subtitle">{t('about_values_sub')}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {(content?.about?.features || localizedValues).map((val, idx) => {
              return (
                <motion.div 
                  key={idx} 
                  style={{ 
                    padding: '2.5rem', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-bento)'
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', color: '#D12F0E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    {val.icon === 'Globe' ? <Globe size={26} /> : val.icon === 'ShieldCheck' ? <ShieldCheck size={26} /> : val.icon === 'Award' ? <Award size={26} /> : <Cpu size={26} />}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{val.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Standards Banner */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: '#09090b', 
            borderRadius: 'var(--radius-xl)', 
            padding: '4rem 3rem', 
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
                {standardsTitle}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {standardsSubtitle}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {standardsList.map((std, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={20} color="#22c55e" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
                className="btn-modern" 
                style={{ background: '#ffffff', color: '#09090b', padding: '1.2rem 2.5rem', fontSize: '1.05rem', fontWeight: '600' }}
                onClick={() => onOpenProposal()}
              >
                {t('modal_badge')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
