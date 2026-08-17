import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { ReactElement } from 'react';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import PortfolioSection from './PortfolioSection';
import BlogSection from './BlogSection';
import BlogArticle from '../pages/BlogArticle';
import { LanguageProvider } from '@/contexts/LanguageContext';

const renderWithLanguage = (ui: ReactElement) => render(<LanguageProvider>{ui}</LanguageProvider>);

afterEach(cleanup);
beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState({}, '', '/');
});

describe('Voice AI Signal bilingual portfolio content', () => {
  it('renders verified social links in the English hero', () => {
    renderWithLanguage(<HeroSection />);
    expect(screen.getByLabelText('GitHub').getAttribute('href')).toBe('https://github.com/Ahmed-Ezzat20');
    expect(screen.getByLabelText('LinkedIn').getAttribute('href')).toBe('https://www.linkedin.com/in/mrezzat/');
    expect(screen.getByLabelText('Email').getAttribute('href')).toBe('mailto:ahmedezzat0247@gmail.com');
    expect(screen.getByText('Download CV').getAttribute('href')).toBe(`${import.meta.env.BASE_URL}Ahmed_Ezzat_CV.pdf`);
  });

  it('renders the updated Voice AI specialization', () => {
    renderWithLanguage(<HeroSection />);
    expect(screen.getByText(/Arabic voice/i)).toBeTruthy();
    expect(screen.getByText(/13.6k/i)).toBeTruthy();
    expect(screen.getAllByText(/154 ms/i).length).toBeGreaterThan(0);
  });

  it('renders Arabic RTL content when Arabic is selected from the shareable URL', () => {
    window.history.replaceState({}, '', '/?lang=ar');
    renderWithLanguage(<HeroSection />);
    expect(document.documentElement.dir).toBe('rtl');
    expect(document.documentElement.lang).toBe('ar');
    expect(screen.getByText(/أبني طبقة الإشارة للصوت العربي/i)).toBeTruthy();
    expect(screen.getByText(/تحميل السيرة الذاتية/i)).toBeTruthy();
  });

  it('uses the confirmed LinkedIn link in the contact area', () => {
    renderWithLanguage(<ContactSection />);
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink.getAttribute('href')).toBe('https://www.linkedin.com/in/mrezzat/');
  });

  it('renders CV-aligned selected projects', () => {
    renderWithLanguage(<PortfolioSection />);
    expect(screen.getByText(/Large-Scale Saudi Arabic Speech Corpus/i)).toBeTruthy();
    expect(screen.getByText(/Real-Time Audio Chat with Voice AI/i)).toBeTruthy();
    expect(screen.getByText(/EgyLens/i)).toBeTruthy();
  });

  it('links the home blog preview to dedicated article routes', () => {
    renderWithLanguage(<MemoryRouter><BlogSection /></MemoryRouter>);
    expect(screen.getByText(/Writing from the voice AI engineering field/i)).toBeTruthy();
    expect(screen.getByRole('link', { name: /View all articles/i }).getAttribute('href')).toBe('/blog');
    expect(screen.getByRole('link', { name: /Read article/i }).getAttribute('href')).toBe('/blog/latency-is-a-product-decision');
  });

  it('renders a Medium-style article at its dedicated route', () => {
    renderWithLanguage(<MemoryRouter initialEntries={['/blog/latency-is-a-product-decision']}><Routes><Route path="/blog/:slug" element={<BlogArticle />} /></Routes></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /Latency is a product decision/i })).toBeTruthy();
    expect(screen.getByText(/Why response time changes the conversation/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Share/i })).toBeTruthy();
  });
});
