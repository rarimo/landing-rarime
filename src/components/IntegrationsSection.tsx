export default function IntegrationsSection() {
  const integrations = [
    {
      title: 'Metamask',
      img: '/images/metamask-logo.svg',
    },
    {
      title: 'Civic',
      img: '/images/civic-logo.svg',
    },
    {
      title: 'Worldcoin',
      img: '/images/worldcoin-logo.svg',
    },
    {
      title: 'Gitcoin Passport',
      img: '/images/gp-logo.svg',
    },
    {
      title: 'Kleros',
      img: '/images/kleros-logo.svg',
    },
    {
      title: 'Colab',
      img: '/images/colab-logo.svg',
    },
    {
      title: 'QuestN',
      img: '/images/questn-logo.svg',
    },
    {
      title: 'Unstoppable Domains',
      img: '/images/ud-logo.svg',
    },
    {
      title: 'Galxe',
      img: '/images/galxe-logo.svg',
    },
    {
      title: 'Zealy',
      img: '/images/zealy-logo.svg',
    },
    {
      title: 'Integral',
      img: '/images/integral-logo.svg',
    },
  ]

  return (
    <div className='flex flex-col gap-20'>
      <div className='container flex items-end justify-between'>
        <div className='flex flex-col gap-6'>
          <h2 className='typo-subtitle1 text-text-secondary'>Integrations</h2>
          <p className='typo-h3 text-text-primary'>Rarime app integrations</p>
        </div>
        <button className='button-large button-primary w-max'>
          <span>Integrate</span>
          <img
            className='h-5 w-5'
            src='/icons/arrow-right-icon.svg'
            alt='Arrow right icon'
          />
        </button>
      </div>

      <div className='flex gap-6 overflow-x-auto px-4'>
        {integrations.map(({ title, img }, index) => (
          <div
            key={index}
            className='flex h-25 min-w-40 flex-1 flex-col items-center justify-between rounded-sm bg-background-component p-3'
          >
            <img className='h-8 w-8' src={img} alt={title} />
            <p className='typo-caption1 text-center text-text-secondary'>
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
