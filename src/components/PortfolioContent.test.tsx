import { cleanup, render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import PortfolioSection from './PortfolioSection';

afterEach(cleanup);

describe('terminal portfolio content', () => {
  it('renders all verified social links in the hero', () => {
    render(<HeroSection />);

    expect(screen.getByLabelText('GitHub').getAttribute('href')).toBe('https://github.com/Ahmed-Ezzat20');
    expect(screen.getByLabelText('LinkedIn').getAttribute('href')).toBe('https://www.linkedin.com/in/mrezzat/');
    expect(screen.getByLabelText('Email').getAttribute('href')).toBe('mailto:ahmedezzat0247@gmail.com');
    expect(screen.getByText('cat ./Ahmed_Ezzat_CV.pdf').getAttribute('href')).toBe(`${import.meta.env.BASE_URL}Ahmed_Ezzat_CV.pdf`);
  });

  it('renders the updated Voice AI specialization', () => {
    render(<HeroSection />);

    expect(screen.getByText(/Arabic Speech & Voice AI/i)).toBeTruthy();
    expect(screen.getByText(/13.6k hours/i)).toBeTruthy();
    expect(screen.getAllByText(/154ms/i).length).toBeGreaterThan(0);
  });

  it('uses the confirmed LinkedIn link in the contact area', () => {
    render(<ContactSection />);

    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink.getAttribute('href')).toBe('https://www.linkedin.com/in/mrezzat/');
  });

  it('renders CV-aligned selected projects', () => {
    render(<PortfolioSection />);

    expect(screen.getByText(/Large-Scale Saudi Arabic Speech Corpus/i)).toBeTruthy();
    expect(screen.getByText(/Real-Time Audio Chat with Voice AI/i)).toBeTruthy();
    expect(screen.getByText(/EgyLens/i)).toBeTruthy();
  });
});
