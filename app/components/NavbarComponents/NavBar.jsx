import NavBarTab from './NavBarTab'

export default function NavBar() {
  return (
    <div className='flex items-center justify-evenly w-full'>
        <NavBarTab name={"Home"} link={'/'} />
        <NavBarTab name={"About us"} link={'/about'} />
        <NavBarTab name={"Contact"} link={'/contact'} />
        <NavBarTab name={"Features"} link={'/features'} />
    </div>
  )
}
