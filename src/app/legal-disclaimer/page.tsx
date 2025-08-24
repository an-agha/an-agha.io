
function legalDisclaimer() {

  const content = [
    'The materials on this website are made available by Nomik Legal, PLLC for informational purposes only and do not constitute legal advice. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. You should not act upon any information without seeking professional legal counsel tailored to your situation.',
    'No attorney-client relationship is formed by reading this website, using its contact forms, or sending unsolicited emails to our firm or its attorneys. Do not send confidential or time-sensitive information through this website.',
    'This website may be considered attorney advertising under the Texas Disciplinary Rules of Professional Conduct. Prior results do not guarantee a similar outcome. Any testimonial or endorsement does not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.',
    'Nomik Legal, PLLC is licensed to practice law in Texas. We do not intend to represent anyone in a jurisdiction where this website does not comply with applicable laws and ethical rules.',
  ]

  return (
    <main className="main-container pt-[60px] lg:pt-[100px] px-10 lg:px-[100px]">
      <section className='w-full max-w-[580px] min-h-screen flex flex-col gap-y-6 py-10 lg:py-[100px]'>
        <h1 className='text-3xl lg:text-[48px] font-bold text-primary-textclr'>
          Legal Disclaimer
        </h1>
        <div className='w-full flex flex-col gap-y-4'>
         {
          content.map((paragraph,index) => (
            <p className='text-sm lg:text-base text-secondary-textclr' key={index}>
              {paragraph}
            </p>
          ))
         }
        </div>
      </section>
    </main>
  )
}

export default legalDisclaimer