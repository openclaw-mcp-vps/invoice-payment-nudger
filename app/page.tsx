export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Automate Polite Payment Reminders.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Invoice Payment Nudger automatically sends progressive email &amp; SMS reminders based on your escalation rules — so you get paid faster without the awkward follow-ups.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Automating — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📨', title: 'Email & SMS Reminders', desc: 'Send polite nudges via email or SMS on a schedule you control.' },
            { icon: '📈', title: 'Escalation Rules', desc: 'Automatically escalate tone and frequency as invoices age.' },
            { icon: '🔗', title: 'QuickBooks & FreshBooks', desc: 'Connect your invoicing platform or upload invoices manually.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited invoices',
              'Email & SMS reminders',
              'Custom escalation rules',
              'QuickBooks & FreshBooks sync',
              'Customizable templates',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the reminder escalation work?',
              a: 'You define rules like "send a friendly reminder 3 days after due date, a firmer one at 7 days, and a final notice at 14 days." The app handles the rest automatically.',
            },
            {
              q: 'Do I need a QuickBooks or FreshBooks account?',
              a: 'No. You can connect your existing account for automatic sync, or simply upload invoices manually as CSV or PDF files.',
            },
            {
              q: 'Can I customize the reminder messages?',
              a: 'Yes. Every reminder template is fully editable. Use your own tone, branding, and language — or start from our professionally written defaults.',
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Invoice Payment Nudger. All rights reserved.
      </footer>
    </main>
  )
}
