import FloatingHeader from './FloatingHeader'
import HeaderContent from './HeaderContent'

export default function Header() {
  return (
    <>
      <header
        className='container mt-4 flex flex-col gap-4 py-2'
        data-aos='fade-up'
      >
        <HeaderContent />
        <div className='divider-h' />
      </header>
      <FloatingHeader />
    </>
  )
}
