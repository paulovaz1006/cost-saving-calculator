import InfoSection from "../InfoTab/InfoSection";

const InfoPage = () => (
  <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex gap-40 mb-20">
  <section className="section-info">
    <span className="p-2 rounded-lg mb-3">Cost Calculator</span>        
    <InfoSection 
      title="Stop Calling, Start Saving"
      info="Between phone tag, abandoned calls and no-show appointments, your practice is losing revenue. Use our calculators to discover just how much revenue your practice may be losing — and then find out how Klara can help reclaim lost revenue."
    />
    <a href="#calculator" className="mt-6">Calculate now</a>
  </section>
  <img src="https://assets-global.website-files.com/5dbafac3285ec25ba456f473/618b9ce22183ef1c81034fe1_check-stats.svg" />        
</div>
)

export default InfoPage;