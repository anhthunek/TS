import Logo from '../../assets/Logo.png'
import Link from './Link'

type Props = {
    selectedPage: string
    setSelectedPage: (value: string) => void ;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex justify-between items-center"
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-40 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side */}
                    <img src={Logo} alt="Logo" />
                    {/* Right side */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign in</p>
                            <p>Become a Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Navbar