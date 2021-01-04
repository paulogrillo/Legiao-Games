

export default function Landing({children}){
    return(
        <div className="w-full landing-mobile">
            <img className="w-full h-full" src="/img/games/ninja.jpg" alt=""/>
            {children}
        </div>
    )
}