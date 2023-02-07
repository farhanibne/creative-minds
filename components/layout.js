import Nav from './Nav'

export default function Layout({children}){
  return(
    <div className='mx-auto  md:mx-auto font-poppins'>
      <Nav />
      <main>
        {children}
      </main>
    </div>
  )
}