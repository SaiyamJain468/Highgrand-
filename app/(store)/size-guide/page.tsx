export default function SizeGuidePage() {
  return (
    <div className="bg-brand-black min-h-screen pt-[104px] pb-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-[56px] text-brand-white mb-2 leading-none">SIZE GUIDE</h1>
          <p className="font-inter text-brand-muted text-[13px] tracking-[0.1em] uppercase">
            All measurements are in inches.
          </p>
        </div>

        <div className="bg-brand-dark border border-brand-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-inter text-[14px] text-brand-white">
              <thead className="bg-[#111111] border-b border-brand-border text-[12px] uppercase tracking-wider text-brand-muted">
                <tr>
                  <th className="p-6 font-medium">Size</th>
                  <th className="p-6 font-medium">Chest (Pit to Pit)</th>
                  <th className="p-6 font-medium">Length</th>
                  <th className="p-6 font-medium">Shoulder</th>
                  <th className="p-6 font-medium">Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-6 font-medium">S</td>
                  <td className="p-6">22.5&quot;</td>
                  <td className="p-6">28.0&quot;</td>
                  <td className="p-6">21.5&quot;</td>
                  <td className="p-6">9.0&quot;</td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-6 font-medium">M</td>
                  <td className="p-6">23.5&quot;</td>
                  <td className="p-6">29.0&quot;</td>
                  <td className="p-6">22.5&quot;</td>
                  <td className="p-6">9.5&quot;</td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors text-brand-accent">
                  <td className="p-6 font-medium">L (Reference)</td>
                  <td className="p-6">24.5&quot;</td>
                  <td className="p-6">30.0&quot;</td>
                  <td className="p-6">23.5&quot;</td>
                  <td className="p-6">10.0&quot;</td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-6 font-medium">XL</td>
                  <td className="p-6">25.5&quot;</td>
                  <td className="p-6">31.0&quot;</td>
                  <td className="p-6">24.5&quot;</td>
                  <td className="p-6">10.5&quot;</td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-6 font-medium">XXL</td>
                  <td className="p-6">26.5&quot;</td>
                  <td className="p-6 text-brand-white">32.0&quot;</td>
                  <td className="p-6">25.5&quot;</td>
                  <td className="p-6">11.0&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-[#111111] p-8 border border-brand-border font-inter text-[14px]">
          <h3 className="font-medium text-brand-white mb-4 uppercase tracking-widest text-[12px]">Fit Notes</h3>
          <ul className="list-disc pl-5 text-brand-muted space-y-2">
            <li>Our t-shirts are intentionally designed with an oversized, boxy fit.</li>
            <li>If you prefer a standard fit, we recommend sizing down one full size.</li>
            <li>For the intended HIGHGRAND look, go with your true size.</li>
            <li>Male model is 6&apos;1&quot; (185cm) and wears a size L.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
