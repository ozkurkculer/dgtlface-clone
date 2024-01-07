import NavbarItem from "../NavbarItem/page"

export default function Navbar({navbarItems}) {
    return(
        <div className="flex flex-row items-center gap-5">
            <NavbarItem name={'Ana Sayfa'} direction={''}/>
            <NavbarItem name={'Hizmetlerimiz'} direction={'hizmetlerimiz'}/>
            <NavbarItem name={'Blog'} direction={'blog'}/>
            <NavbarItem name={'Hakkımızda'} direction={'hakkimizda'}/>
            <NavbarItem name={'İletişim'} direction={'contact'}/>
        </div>
    )
}