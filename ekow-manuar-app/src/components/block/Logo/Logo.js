const Logo = () => {
    return (
        <div className={'relative w-[200px] h-[200px] border-t-[5px] border-r-[5px] border-0 border-solid border-white rounded-[14px]'}>
            <div className={'w-[52.5%] rounded-tl-[14px] h-3/4 absolute inline-block border-r-[5px] top-[-5px] border-l-[5px] border-0 border-solid border-white'}></div>
            <div className={'w-full h-1/4 absolute bottom-0 left-0 text-[75%] flex flex-col justify-center items-start text-white'}>
                <p className={'tracking-[2.8rem]'}>EKOW</p>
                <p className={'tracking-[1.45rem]'}>MANUAR</p>
            </div>
        </div>
    )
}

export default Logo;