import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import coastalFriends from "@/assets/coastal_friends.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aerie Inspired | Your Voice, Your Reward" },
    { name: "description", content: "Explore an Aerie-inspired reviewer concept celebrating your style and your honest opinion. Reward eligibility depends on verified partner requirements." },
    { property: "og:title", content: "Aerie Inspired | Your Voice, Your Reward" },
    { property: "og:description", content: "Feel-good style. Honest opinions. An independent reviewer landing page concept." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

export const OFFER_URL = "https://linkthem.net/aff_c?offer_id=5298&aff_id=115643";
const steps = [
  ["Make your first move", "Choose ‘Explore your reward’ to see the next steps and participation requirements."],
  ["A few details. All you.", "When registration opens, provide your basic information and a current email address."],
  ["Share your take + discover offers", "Give your honest product feedback, then finish the 4–5 qualifying partner deals outlined in the offer."],
  ["Your reward, ready to claim", "Once each requirement is confirmed, follow the redemption instructions for your potential $750 reward."],
];
const faqs = [
  ["Is the $750 reward guaranteed?", "No. It is a potential reward, not a guaranteed payment. It depends on eligibility, completion of the partner requirements, and verification. Some partner offers may involve purchases or subscriptions."],
  ["Is this an official Aerie program?", "No. This is an independent, Aerie-inspired design concept. It is not affiliated with or endorsed by Aerie or American Eagle Outfitters."],
  ["Can I join right now?", "The buttons on this page open a third-party partner offer. Read its eligibility rules, any costs, and full terms there before you take part."],
];

export function Index() {
  const [showOffer, setShowOffer] = useState(false);
  return (
    <div className="landing">
      <header className="site-header">
        <a href="#" className="brand" aria-label="Aerie inspired home">aerie<span>INSPIRED</span></a>
        <span className="header-label">THE REVIEWER EDIT</span>
        <a className="header-link" href="#how-it-works">How it works <ArrowRight size={16} /></a>
      </header>
      <div className="announcement"><Sparkles size={16} /><span>A LITTLE FEEDBACK. A BIG POSSIBLE REWARD.</span><Sparkles size={16} /></div>
      <main>
        <section className="hero">
          <img className="hero-photo" src={coastalFriends} alt="Two friends in coral-pink casual outfits enjoying the sunshine" width={1600} height={1008} />
          <div className="hero-content">
            <span className="eyebrow"><span className="tiny-star">✳</span> FOR THE GIRLS WITH SOMETHING TO SAY</span>
            <h1>Aerie style.<br />Your <em>honest</em><br />opinion.</h1>
            <p className="hero-description">Love the feel. Tell us what you think.<br />Make your everyday favorites more rewarding.</p>
            <div className="reward-line"><span className="reward-amount">$750</span><span>YOUR POTENTIAL<br />REVIEWER REWARD</span></div>
            <Button asChild variant="claim" className="claim-button"><a href={OFFER_URL} target="_blank" rel="sponsored nofollow noopener">Explore your reward <ArrowRight /></a></Button>
            <p className="fine-print">Subject to eligibility & completion of partner offers. <button type="button" className="details-link" onClick={() => setShowOffer(true)}>What you should know first</button></p>
          </div>
          <div className="photo-note"><Heart size={18} /> A LITTLE MORE YOU.</div>
        </section>
        <section className="stats" aria-label="Offer overview">
          <div><strong>$750</strong><span>POTENTIAL REWARD</span></div>
          <div><strong>4–5</strong><span>QUALIFYING PARTNER DEALS</span></div>
          <div><strong>You.</strong><span>YOUR VOICE MAKES IT REAL</span></div>
        </section>
        <section id="how-it-works" className="steps-section">
          <div className="section-intro"><span className="eyebrow">GOOD THINGS START HERE</span><h2>Four little steps.<br /><em>One feel-good finish.</em></h2><p>A fresh take on getting rewarded.<br />Here’s what the journey could look like.</p><Heart className="intro-heart" size={50} strokeWidth={1.3} /></div>
          <div className="steps-list">{steps.map(([title, description], i) => <article className="step" key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight className="step-arrow" size={21} /></article>)}</div>
        </section>
        <section className="bottom-cta"><Sparkles size={27} /><span>REAL OPINIONS. FEEL-GOOD POSSIBILITIES.</span><h2>Your next little<br /><em>happy thing.</em></h2><Button asChild variant="claim" className="claim-button"><a href={OFFER_URL} target="_blank" rel="sponsored nofollow noopener">Let’s take a look <ArrowRight /></a></Button><p>Check the details before you begin.</p></section>
        <section className="faq-section"><h2>A few things to know.</h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} /></summary><p>{answer}</p></details>)}</div></section>
      </main>
      <footer><a href="#" className="brand">aerie<span>INSPIRED</span></a><p>Independent design concept. Not affiliated with Aerie or American Eagle Outfitters.<br />The $750 figure is a potential reward, not a guaranteed payment. Partner offers come from third parties.</p><span>© {new Date().getFullYear()} THE REVIEWER EDIT</span></footer>
      {showOffer && <div className="modal-overlay" onClick={() => setShowOffer(false)}><section className="offer-modal" role="dialog" aria-modal="true" aria-labelledby="offer-title" onClick={e => e.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" aria-label="Close reward details" onClick={() => setShowOffer(false)}><X /></Button><Sparkles className="text-primary" size={30} /><span className="eyebrow">THE DETAILS FIRST</span><h2 id="offer-title">A feel-good idea.<br />Worth a peek.</h2><p>This page is an independent Aerie-inspired concept. It is not affiliated with or endorsed by Aerie or American Eagle Outfitters.</p><p>The buttons here open a third-party partner offer page. Check its eligibility rules, any costs or subscriptions, and full terms there before you take part.</p><Button variant="claim" className="claim-button" onClick={() => { setShowOffer(false); document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}>See the four steps <ArrowRight /></Button></section></div>}
    </div>
  );
}
