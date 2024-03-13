import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-between border-b-2'>
            <h1 className='text-4xl font-bold'> Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    )
}

export default Header
