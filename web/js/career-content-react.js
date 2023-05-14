// Add function to buy button.
function showModal(e){
    if(e.target.className == 'fa-sharp fa-solid fa-cart-shopping') return
    var modal = document.querySelector('.modal')
    modal.classList.add('open')

    localStorage.removeItem("orderShirtType")
    localStorage.removeItem("club")
    localStorage.removeItem("season")
    localStorage.removeItem("nation")

    let shirtType = e.target.className
    shirtType = shirtType.split(" ")[1]
    localStorage.setItem("orderShirtType", shirtType)
    localStorage.setItem("club", document.querySelector('.club.text').textContent)
    localStorage.setItem("season", document.querySelector('.desc.text').textContent.split(" ")[0])
    localStorage.setItem("nation", document.querySelector('.nation-club p').textContent.split(' ')[2])

    console.log(document.querySelector('.club.text').textContent)
    console.log(document.querySelector('.desc.text').textContent)
    console.log(document.querySelector('.nation-club p').textContent.split(' ')[2])
}

function Header({
    //Header
    seasonHeader = '2008/09',
    linkAvaHead = "./assets/img/career/ronaldo/2008-2009/head-avatar.jpg", 
    nation = 'Portugal',
    club = 'Manchester United',
    linkFifaHead = "./assets/img/career/ronaldo/2008-2009/head-fifa.jpg",
    linkClubIcon = './assets/img/career/ronaldo/2008-2009/club-icon.jpg',
    linkNationIcon = './assets/img/career/ronaldo/2008-2009/nation-icon.jpg'
}){
    return(
        <>
            <img src= {linkAvaHead} className="avatar left"/>
            <div className="nation-club">
                <p><img src= {linkNationIcon} alt=""/> Nation: {nation}</p>
                <p><img src= {linkClubIcon} alt=""/> Club: {club}</p>
                <p><img src= './assets/img/season-header-icon.jpg' alt=""/> Season: {seasonHeader}</p>
            </div>
            <img src= {linkFifaHead} className="fifa-card right"/>
        </>
    )
}

function CareerMoment({
    moments = [
        "./assets/img/career/ronaldo/2008-2009/moment1.jpg",
        "./assets/img/career/ronaldo/2008-2009/moment2.jpg",
        "./assets/img/career/ronaldo/2008-2009/moment3.jpg",
        "./assets/img/career/ronaldo/2008-2009/moment4.jpg",
        "./assets/img/career/ronaldo/2008-2009/moment5.jpg",
        "./assets/img/career/ronaldo/2008-2009/moment6.jpg"
    ],
    
    // Achivement
    clubGoals = 26,
    clubAssits = 9,
    nationGoals = 1,
    nationAssits = 0,

    trophies = ['Champions League', 'Premier League', 'FIFA Club World Cup', 'Community Shield'],
    awards = ['Ballon d\'Or', 'European Golden Shoe', 'World Soccer Player of the Year', 'UEFA Team of the Year']
}){

    React.useEffect(()=>{
        document.querySelector('.career__moment .achivement').background = 'red'
    },[])
    return (
        <>
            <div className="achivement">
                <div className="goals-assits">
                    <div className="goals-assits__left">
                        <h3><i className="fa-sharp fa-solid fa-futbol"></i> Club Goals : <span>{clubGoals}</span></h3>
                        <h3><i className="fa-sharp fa-solid fa-users"></i> Club Assits: <span>{clubAssits}</span></h3>
                        {/* <h3><i className="fa-sharp fa-solid fa-futbol"></i> C1 Goals : <span>{goalsAmount}</span></h3> */}
                    </div>

                    <div className="goals-assits__right">
                        <h3><i className="fa-sharp fa-solid fa-futbol"></i> Nation Goals: <span>{nationGoals}</span></h3>
                        <h3><i className="fa-sharp fa-solid fa-users"></i> Nation Assits: <span>{nationAssits}</span></h3>
                        {/* <h3><i className="fa-sharp fa-solid fa-users"></i> C1 Assits: <span>{assistsAmount}</span></h3> */}
                    </div>
                </div>

                <div className="titles-awards">
                    <div className="titles">
                        <h3><i className="fa-solid fa-trophy"></i> TROPHIES <i className="fa-sharp fa-solid fa-trophy"></i></h3>
                        
                        {trophies.map((trophy, index) => {
                            // return <h3 key = {index}><span className="icon cominityshield"></span>{trophy}</h3>
                            if(trophy =='Champions League') return <h3 key = {index}><span className="icon c1"></span>{trophy}</h3>
                            if(trophy == 'Premier League') return <h3 key = {index}><span className="icon nha"></span>{trophy}</h3>
                            if(trophy == 'La Liga') return <h3 key = {index}><span className="icon laliga"></span>{trophy}</h3>
                            
                            const randomCup = Math.floor(Math.random()*2)

                            if (randomCup == 0) return <h3 key = {index}><span className="icon comunityshield"></span>{trophy}</h3>
                            return <h3 key = {index}><span className="icon ffclubwc"></span>{trophy}</h3>
                        })}

                        {/* <h3><span className="icon nha"></span>Premier League</h3>
                        <h3><span className="icon ffclubwc"></span>FIFA Club World Cup</h3>
                        <h3><span className="icon comunityshield"></span>Community Shield</h3> */}
                    </div>

                    <div className="awards">
                        <h3><i className="fa-solid fa-award"></i> AWARDS <i className="fa-solid fa-award"></i></h3>
                        
                        {/* <h3><span className="icon goldenshoe"></span>European Golden Shoe</h3> */}
                        
                        {
                            awards.map((award,index) => {
                                if ( award == "Ballon d'Or") return <h3 key = {index}><span className="icon balondor"></span>{award}</h3>
                                if(award.includes('Golden Shoe')) return <h3 key = {index}><span className="icon goldenshoe"></span>{award}</h3> 
                                if(award.includes('Golden Boot') || award.includes('Top Sco'))
                                    return <h3 key = {index}><span className="icon goldenboot"></span>{award}</h3> 
                                
                                if(award.includes('Serie')) return <h3 key = {index}><span className="icon seriea"></span>{award}</h3> 

                                const randomAward= Math.floor(Math.random()*2)

                                if (randomAward == 0) return <h3 key = {index}><span className="icon goldmedal"></span>{award}</h3>
                                return <h3 key = {index}><span className="icon ffthebest"></span>{award}</h3>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="moment">
                {
                    moments.map((moment, index)=>{
                        return <img key = {index} src= {moment} alt=""/>
                    })
                }
            </div>
        
        </>
    )
}

function CareerVideo({
    // Video
    linkYoutube = 'https://www.youtube.com/embed/Quk-X1BEznE',
    descYoutube = 'Cristiano Ronaldo Hightlights 2008/09'
}){
    return(
        <>
            <iframe src = {linkYoutube}></iframe>
            <p>{descYoutube}</p>
        </>
    )
}

function ClubShirts({
    club = 'Manchester United',
    nation = 'Portugal',
    // Shirts
    season = '2008/09',

    linkHomeShirt = './assets/img/career/ronaldo/2008-2009/home-shirt.jpg',
    linkHomeShirtBack = './assets/img/career/ronaldo/2008-2009/home-shirt-back.jpg', 
    linkAwayShirt = './assets/img/career/ronaldo/2008-2009/away-shirt.jpg',
    linkAwayShirtBack = './assets/img/career/ronaldo/2008-2009/away-shirt-back.jpg',
    linkThirdShirt = './assets/img/career/ronaldo/2008-2009/third-shirt.jpg',
    linkThirdShirtBack ='./assets/img/career/ronaldo/2008-2009/third-shirt-back.jpg'
}){

    let playerOption = localStorage.getItem("playerOption")
    if(playerOption == 'Messi'){
        linkHomeShirtBack = './assets/img/career/messi/2008-2009/home-shirt-back.jpg'
        linkAwayShirtBack = './assets/img/career/messi/2008-2009/away-shirt-back.jpg'
        linkThirdShirtBack ='./assets/img/career/messi/2008-2009/third-shirt-back.jpg'
    }

    // Hover Shirt
    const [isHoverHomeShirt, setIsHoverHomeShirt] = React.useState(false);
    const [isHoverAwayShirt, setIsHoverAwayShirt] = React.useState(false);
    const [isHoverThirdShirt, setIsHoverThirdShirt] = React.useState(false);

    
    // Home Shirt
    linkHomeShirt = `url(` +`'` + linkHomeShirt  +`'` +`)`
    linkHomeShirtBack = `url(` +`'` + linkHomeShirtBack  +`'` +`)`

    const homeShirt = {
        backgroundImage: isHoverHomeShirt? 
        linkHomeShirtBack: linkHomeShirt,
    }

    function handleHoverHomeShirt(){
        setIsHoverHomeShirt(true)
    }

    function handleLeaveHomeShirt(){
        setIsHoverHomeShirt(false)
    }

    // Away Shirt

    linkAwayShirt = `url(` +`'` + linkAwayShirt  +`'` +`)`
    linkAwayShirtBack = `url(` +`'` + linkAwayShirtBack  +`'` +`)`

    const awayShirt = {
        backgroundImage: isHoverAwayShirt? 
        linkAwayShirtBack: linkAwayShirt,
    }

    function handleHoverAwayShirt(){
        setIsHoverAwayShirt(true)
    }

    function handleLeaveAwayShirt(){
        setIsHoverAwayShirt(false)
    }

    // Third Shirt

    linkThirdShirt = `url(` +`'` + linkThirdShirt  +`'` +`)`
    linkThirdShirtBack = `url(` +`'` + linkThirdShirtBack  +`'` +`)`

    const thirdShirt = {
        backgroundImage: isHoverThirdShirt? 
        linkThirdShirtBack: linkThirdShirt,
    }

    function handleHoverThirdShirt(){
        setIsHoverThirdShirt(true)
    }

    function handleLeaveThirdShirt(){
        setIsHoverThirdShirt(false)
    }

    return(
        <>
            <div className="shirt club-shirt-home" >
                <div className="shirt-image" 
                    style={homeShirt}
                    onMouseEnter = {handleHoverHomeShirt}
                    onMouseLeave = {handleLeaveHomeShirt}
                    ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Home</div>
                <div className="buy-btn home-shirt.jpg" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>
            
            <div className="shirt club-shirt-away">
                <div className="shirt-image"
                    style={awayShirt}
                    onMouseEnter = {handleHoverAwayShirt}
                    onMouseLeave = {handleLeaveAwayShirt}
                ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Away</div>
                <div className="buy-btn away-shirt.jpg" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>

            <div className="shirt club-shirt-third">
                <div className="shirt-image"
                    style={thirdShirt}
                    onMouseEnter = {handleHoverThirdShirt}
                    onMouseLeave = {handleLeaveThirdShirt}
                ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Third</div>
                <div className="buy-btn third-shirt.jpg" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>
        </>
    )
}

function NationShirts({
    club = 'Manchester United',
    nation = 'Portugal',
    season = '2008/09',

    linkNationHomeShirt ='./assets/img/career/ronaldo/2008-2009/nation-home.jpg',
    linkNationHomeShirtBack=  './assets/img/career/ronaldo/2008-2009/nation-home-back.jpg',
    linkNationAwayShirt='./assets/img/career/ronaldo/2008-2009/nation-away.jpg',
    linkNationAwayShirtBack= './assets/img/career/ronaldo/2008-2009/nation-away-back.jpg'
}){

    let playerOption = localStorage.getItem("playerOption")
    if(playerOption == 'Messi'){
        linkNationHomeShirtBack=  './assets/img/career/messi/2008-2009/nation-home-back.jpg'
        linkNationAwayShirtBack= './assets/img/career/messi/2008-2009/nation-away-back.jpg'
    }

    const [isHoverNationHomeShirt, setIsHoverNationHomeShirt] = React.useState(false);
    const [isHoverNationAwayShirt, setIsHoverNationAwayShirt] = React.useState(false);

    // Nation Home Shirt

    linkNationHomeShirt = `url(` +`'` + linkNationHomeShirt  +`'` +`)`
    linkNationHomeShirtBack = `url(` +`'` + linkNationHomeShirtBack  +`'` +`)`

    const nationHomeShirt = {
        backgroundImage: isHoverNationHomeShirt? 
        linkNationHomeShirtBack: linkNationHomeShirt,
    }

    function handleHoverNationHomeShirt(){
        setIsHoverNationHomeShirt(true)
    }

    function handleLeaveNationHomeShirt(){
        setIsHoverNationHomeShirt(false)
    }

    // Nation Away Shirt

    linkNationAwayShirt = `url(` +`'` + linkNationAwayShirt  +`'` +`)`
    linkNationAwayShirtBack = `url(` +`'` + linkNationAwayShirtBack  +`'` +`)`
    const nationAwayShirt = {
        backgroundImage: isHoverNationAwayShirt? 
        linkNationAwayShirtBack: linkNationAwayShirt,
    }

    function handleHoverNationAwayShirt(){
        setIsHoverNationAwayShirt(true)
    }

    function handleLeaveNationAwayShirt(){
        setIsHoverNationAwayShirt(false)
    }


    return(
        <>
            <div className="shirt nation-shirt-home">
                <div className="shirt-image"
                    style={nationHomeShirt}
                    onMouseEnter = {handleHoverNationHomeShirt}
                    onMouseLeave = {handleLeaveNationHomeShirt}
                ></div>
                <div className="club text">{nation}</div>
                <div className="desc text">{season} Home</div>
                <div className="buy-btn nation-home.jpg" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping"></i></div>
            </div>
            
            <div className="shirt nation-shirt-away">
                <div className="shirt-image"
                    style={nationAwayShirt}
                    onMouseEnter = {handleHoverNationAwayShirt}
                    onMouseLeave = {handleLeaveNationAwayShirt}
                ></div>
                <div className="club text">{nation}</div>
                <div className="desc text">{season} Away</div>
                <div className="buy-btn nation-away.jpg" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping"></i></div>
            </div>
        </>
    )
}


function getLinkImageInSeason(season = '2008-2009'){
    let playerOption = localStorage.getItem("playerOption")
    let seasonHeader = season.slice(0,4) + '/' + season.slice(7)
    let club = ''
    let linkYoutube = ''
    let nation = ''
    let clubGoals, clubAssits, nationGoals, nationAssits
    let trophies = [], awards = []
    let descYoutube = 'Cristiano Ronaldo Hightlights ' + season
    let moments = []
    if(playerOption== 'Ronaldo') {
        nation = 'Portugal'
        const mu = ['2008-2009', '2021-2022']
        const alnassr = ['2022-2023']
        const juventus = ['2018-2019', '2019-2020', '2020-2021']

        if(mu.includes(season)) club = 'Manchester United'
        else if (alnassr.includes(season)) club = 'Al-Nassr'
        else if (juventus.includes(season)) club = 'Juventus'
        else club = 'Real Madrid'
    }
    else {
        nation = 'Argentina'
        const psg = ['2021-2022', '2022-2023']
        if (psg.includes(season)) club = 'Paris Saint-Germain'
        else club = 'Barcelona'
    }

    let loop = 6
    if (playerOption == 'Messi') loop = 2
    for (let i = 1; i<=loop;++i) {
        moments.push("./assets/img/career/"+ playerOption.toLowerCase() + '/' + season+'/moment'+i+'.jpg')
    }

    switch (season) {
        case '2008-2009':
            if(playerOption == 'Ronaldo'){
                clubGoals = 26; clubAssits = 9; nationGoals = 1; nationAssits = 0
                trophies = ['Premier League', 'English League Cup']
                awards = ['FIFA Puskas Award', 'FIFPro World XI Appearances']
            }
            else{
                clubGoals = 38; clubAssits = 17; nationGoals = 3; nationAssits = 2
                trophies = ['Champions League', 'La Liga', 'Copa del Rey']
                awards = [ 'FIFPro World XI Appearances', 'Ballon d\'Or', 'FIFA World Player of the Year']
            }
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/Quk-X1BEznE'
            else  linkYoutube = 'https://www.youtube.com/embed/e2O35yWcK2o'
            break;
        case '2009-2010':
            if(playerOption == 'Ronaldo') {
                clubGoals = 33; clubAssits = 8; nationGoals = 1; nationAssits = 3
                trophies = []
                awards = ['FIFPro World XI Appearances']
            }

            else{
                clubGoals = 47; clubAssits = 11; nationGoals = 1; nationAssits = 1
                trophies = ['La Liga']
                awards = ['FIFPro World XI Appearances', 'European Golden Shoe', 'Ballon d\'Or']
            }
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/zaKbBMnMFTY'
            else  linkYoutube = 'https://www.youtube.com/embed/HRhJ3I92Auk'
            break;
        case '2010-2011':
            if(playerOption == 'Ronaldo'){
                clubGoals = 53; clubAssits = 16; nationGoals = 3 ; nationAssits = 1 
                trophies = ['Copa del Rey']
                awards = ['European Golden Shoe', 'FIFPro World XI Appearances', 'Pichichi']  
            }
            else{
                clubGoals = 53; clubAssits = 23; nationGoals = 4; nationAssits = 6
                trophies = ['Ballon d\'Or'] 
                awards = [] 
            }
              
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/hgswlGn-V2s' 
            else  linkYoutube = 'https://www.youtube.com/embed/wqPwjqQv8so'
            break
        case '2011-2012':
            if(playerOption == 'Ronaldo'){
                clubGoals = 60; clubAssits = 15; nationGoals = 9 ; nationAssits = 3
                trophies = ['La Liga', 'Supercopa de España', 'FIFPro World XI Appearances']
                awards = ['FIFPro World XI Appearances', 'Ballon d\'Or', 'European Golden Shoe']
            }
            else{
                clubGoals = 73; clubAssits = 30; nationGoals = 9 ; nationAssits = 4
                trophies = ['Copa del Rey']
                awards = ['FIFPro World XI Appearances']
            }

            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/2X-4AQME_dA'
            else  linkYoutube = 'https://www.youtube.com/embed/nUqCnjI-GHQ'
            break
        case '2012-2013':
            if(playerOption == 'Ronaldo'){
                trophies = []
                clubGoals = 55; clubAssits = 12; nationGoals = 4 ; nationAssits = 2
                awards = ['FIFPro World XI Appearances', 'La Liga Most Valuable Player (presented once)', 
            'Champions League Top Scorer'
        ]
            }
            else{
                trophies = ['La Liga']
                clubGoals = 60; clubAssits = 15; nationGoals = 9 ; nationAssits = 3
                awards = ['European Golden Shoe']
            }
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/NAb--RWvdSk'
            else  linkYoutube = 'https://www.youtube.com/embed/eNFqzIz4yuA'
            break
        case '2013-2014':
            if(playerOption == 'Ronaldo'){
                clubGoals = 51; clubAssits = 14; nationGoals = 11 ; nationAssits = 1
                trophies = ['Champions League', 'Copa del Rey', 'UEFA SUPER CUP', 'Club World Cup']
                awards = ['Ballon d\'Or', 'European Golden Shoe', 'FIFA Club World Cup Silver Ball', 'FIFPro World XI Appearances',
            'La Liga Best Goal', 'Champions League Top Scorer', 'Pichichi'
        ]
            }
            else{
                clubGoals = 41; clubAssits = 14; nationGoals = 4 ; nationAssits = 2
                trophies = []
                awards = []
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/zFWGbROCpHk'
            else  linkYoutube = 'https://www.youtube.com/embed/5LA69MyK1Hg'
            break
        case '2014-2015':
            if(playerOption == 'Ronaldo'){
                clubGoals = 61; clubAssits = 21; nationGoals = 5 ; nationAssits = 0
                trophies = []
                awards = ['European Golden Shoe', 'FIFPro World XI Appearances', 'Champions League Top Scorer', 'Pichichi']
            }
            else{
                clubGoals = 58; clubAssits = 27; nationGoals = 4 ; nationAssits = 5
                trophies = ['Champions League', 'La Liga', 'Copa del Rey']
                awards = ['Ballon d\'Or']
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/AzYljPn2g6E'
            else  linkYoutube = 'https://www.youtube.com/embed/eWLQZAnrLXc'
            break
        case '2015-2016':
            if(playerOption == 'Ronaldo'){
                clubGoals = 51; clubAssits = 15; nationGoals = 6 ; nationAssits = 2
                trophies = ['Champions League', 'UEFA SUPER CUP', 'Club World Cup', 'UEFA European Championships']
                awards = ['Ballon d\'Or', 'FIFA The Best', 'Marca Champions League No 1 Award', 'FIFA Club World Cup Golden Ball',
                'FIFPro World XI Appearances', 'Champions League Top Scorer'
            ]
            }
            else{
                clubGoals = 41; clubAssits = 23 ; nationGoals = 9 ; nationAssits = 4
                trophies = ['La Liga']
                awards = ['FIFPro World XI Appearances']
            }
            
        
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/0WhK4x7q19Q'
            else  linkYoutube = 'https://www.youtube.com/embed/y1quwx0OK2A'
            break
        case '2016-2017':
            if(playerOption == 'Ronaldo'){
                clubGoals = 42; clubAssits = 11; nationGoals = 12 ; nationAssits = 2
                trophies = ['Champions League', 'La Liga', 'UEFA SUPER CUP', 'Club World Cup']
                awards = ['Ballon d\'Or', 'FIFA The Best', 'FIFA Club World Cup Silver Ball', 'FIFPro World XI Appearances', 
            'Champions League Top Scorer', 'UEFA Best Forward in Europe'
        ]
            }
            else{
                clubGoals = 54; clubAssits = 16; nationGoals = 3 ; nationAssits = 2
                trophies = ['Copa del Rey']
                awards = ['European Golden Shoe']
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/Vay7Cce_AeA'
            else  linkYoutube = 'https://www.youtube.com/embed/MkzZjMXDCHc'
            break
        case '2017-2018':
            if(playerOption == 'Ronaldo'){
                clubGoals = 44; clubAssits = 8; nationGoals = 10 ; nationAssits = 3
                trophies = ['Champions League', 'Supercopa de España']
                awards = ['FIFPro World XI Appearances', 'Champions League Top Scorer', 
            'UEFA Best Forward in Europe']
            }
            else{
                clubGoals = 45; clubAssits = 18; nationGoals = 7 ; nationAssits = 3
                trophies = ['La Liga', 'Copa del Rey']
                awards = ['European Golden Shoe']
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/6686NaytKGo'
            else  linkYoutube = 'https://www.youtube.com/embed/s4mn7QnRT_8'
            break
        case '2018-2019':
            if(playerOption == 'Ronaldo'){
                clubGoals = 28; clubAssits = 10; nationGoals = 11 ; nationAssits = 0
                trophies = ['Serie A', 'UEFA Nations League']
                awards = ['Marca Leyenda', 'Serie A MVP', 'Serie A Footballer of the Year (AIC)', 'UEFA Nations League Finals Golden Boot']
            }
            else{
                clubGoals = 51; clubAssits = 19; nationGoals = 3 ; nationAssits = 1
                trophies = ['La Liga']
                awards = ['Ballon d\'Or', 'European Golden Shoe', 'FIFA Best']
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/vNW4r7-s6hs'
            else  linkYoutube = 'https://www.youtube.com/embed/fDtFL4lLvyI'
            break
        case '2019-2020':
            if(playerOption == 'Ronaldo'){
                clubGoals = 37; clubAssits = 5; nationGoals = 11 ; nationAssits = 0
                trophies = ['Serie A', 'Supercoppa Italiana']
                awards = ['Dubai Globe Soccer Awards Best Player of the Century', 
            'FIFPro World XI Appearances', 'Serie A Footballer of the Year (AIC)', 'Ballon d\'Or Dream Team (one-off)']
            }
            else{
                clubGoals = 31; clubAssits = 25; nationGoals = 2 ; nationAssits = 1
                trophies = []
                awards = []
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/DhU9bMMaLYw'
            else  linkYoutube = 'https://www.youtube.com/embed/io43HvFvT6w'
            break
        case '2020-2021':
            if(playerOption == 'Ronaldo'){
                clubGoals = 36; clubAssits = 5; nationGoals = 10 ; nationAssits = 2
                trophies = ['Coppa Italia', 'Supercoppa Italiana']
                awards = ['Dubai Globe Soccer Top Goal Scorer of All Time', 'Golden Foot', 'FIFPro World XI Appearances', 'Serie A Best Striker', 
                'UEFA Euros Golden Boot', 'Serie A Top Scorer', 'FIFA The Best Special Award (for international goals record)'
            ]
            }
            else{
                clubGoals = 38; clubAssits = 12; nationGoals = 6 ; nationAssits = 5
                trophies = ['Copa del Rey']
                awards = ['Ballon d\'Or']
            }
            
        
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/pMuoNqz-LK8'
            else  linkYoutube = 'https://www.youtube.com/embed/miQQHB7bpb8'
            break
        case '2021-2022':
            if(playerOption == 'Ronaldo'){
                clubGoals = 24; clubAssits = 3; nationGoals = 10 ; nationAssits = 1
                trophies = []
                awards = ['FIFPro World XI Appearances']
            }
            else{
                clubGoals = 11; clubAssits = 14; nationGoals = 10 ; nationAssits = 2
                trophies = ['Ligue 1', 'Copa America']
                awards = ['FIFPro World XI Appearances', 'FIFA Best']
            }
            
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/hCYCz3g4rOQ'
            else  linkYoutube = 'https://www.youtube.com/embed/yxlYd6NxUjw'
            break
        case '2022-2023':
            if(playerOption == 'Ronaldo'){
                clubGoals = 12; clubAssits = 4; nationGoals = 1 ; nationAssits = 1
                trophies = []
                awards = []
            }
            else{
                clubGoals = 19; clubAssits = 18; nationGoals = 16 ; nationAssits = 5
                trophies = ['World Cup', 'Finalissima']
                awards = ['FIFPro World XI Appearances']

            }
            
            if(playerOption == 'Ronaldo') linkYoutube = 'https://www.youtube.com/embed/CznydEBC4ic'
            else  linkYoutube = 'https://www.youtube.com/embed/McQEy_BtAxg'
            break
        default:
            break;
    }
    playerOption = playerOption.toLowerCase()
    return ({
        // Header
        nation: nation,
        seasonHeader:seasonHeader,
        club: club,
        clubIcon: './assets/img/career/' + playerOption + '/' + season + '/club-icon.jpg',
        nationIcon: './assets/img/career/' + playerOption + '/' + season + '/nation-icon.jpg',
        headAvatar: './assets/img/career/' + playerOption + '/' + season + '/head-avatar.jpg',

        // Achivement
        clubGoals:clubGoals,
        clubAssits:clubAssits,
        nationGoals:nationGoals,
        nationAssits:nationAssits,

        trophies:trophies,
        awards: awards,

        moments:moments,

        linkYoutube: linkYoutube,
        descYoutube: descYoutube,
    
        headFifa: './assets/img/career/'+ playerOption + '/'  + season + '/head-fifa.jpg',
        homeShirt: './assets/img/career/' + playerOption + '/' + season + '/home-shirt.jpg',
        awayShirt: './assets/img/career/' + playerOption + '/' + season + '/away-shirt.jpg',
        thirdShirt: './assets/img/career/' + playerOption + '/' + season + '/third-shirt.jpg',
        nationHome: './assets/img/career/' + playerOption + '/' + season + '/nation-home.jpg',
        nationAway: './assets/img/career/' + playerOption + '/' + season + '/nation-away.jpg'
    })
}

function changeCareerContent(props = {}){
    careerHead.render(<Header
        seasonHeader={props.seasonHeader}
        club= {props.club}
        nation = {props.nation}
        linkAvaHead={props.headAvatar}
        linkFifaHead = {props.headFifa}
        linkClubIcon = {props.clubIcon}
        linkNationIcon ={props.nationIcon}
    />)
    
    careerMoment.render(<CareerMoment
        clubGoals={props.clubGoals}
        clubAssits={props.clubAssits}
        nationGoals={props.nationGoals}
        nationAssits={props.nationAssits}

        trophies= {props.trophies}
        awards= {props.awards}

        moments={props.moments}
    />)
    
    careerVideo.render(<CareerVideo
        linkYoutube={props.linkYoutube}
        descYoutube = {props.descYoutube}
    />)
    
    clubShirts.render(<ClubShirts 
        linkHomeShirt= {props.homeShirt}
        linkAwayShirt = {props.awayShirt}
        linkThirdShirt = {props.thirdShirt}
        nation={props.nation}
        season={props.seasonHeader}
        club ={props.club}
    />)
    
    nationShirts.render(<NationShirts
        linkNationHomeShirt = {props.nationHome}
        linkNationAwayShirt = {props.nationAway}
        nation={props.nation}
        season={props.seasonHeader}
        club ={props.club}
    />)
}

var cntSideBar = 1;
function SideBar(){
    const [show, setShow]  = React.useState(false)
    
    React.useEffect(()=>{
        localStorage.setItem("playerOption", "Ronaldo")
    },[])

    function changePlayerOption(){
        localStorage.setItem("playerOption", document.querySelector('.sidebar__introduce').value)
    }
    const sidebarSeason = {
        listStyle: 'none',
        display: show? 'inline': 'none'
    }

    function showOrHideSeasons(){
        if (cntSideBar == 1){
            setShow(true)
            cntSideBar = 0
        }
        else{
            setShow(false)
            cntSideBar = 1
        }
    }

    return(
        <>
        
        <select className="sidebar__introduce" onChange ={changePlayerOption}>
            
            <option value = "Ronaldo">Ronaldo</option>
            <option value = "Messi">Messi</option>
        </select>
        <li className="text" onClick = {showOrHideSeasons}><i className="fa-sharp fa-regular fa-calendar-days">  Season</i> </li>

        <div className="sidebar__seasons" style = {sidebarSeason}>

            <li className="sidebar__items one" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.one')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2008-2009</li>
            <li className="sidebar__items two" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.two')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2009-2010</li>
            <li className="sidebar__items three" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.three')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2010-2011</li>
            <li className="sidebar__items four" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.four')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2011-2012</li>
            <li className="sidebar__items five" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.five')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2012-2013</li>
            <li className="sidebar__items six" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.six')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2013-2014</li>
            <li className="sidebar__items seven" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.seven')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2014-2015</li>
            <li className="sidebar__items eight" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.eight')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2015-2016</li>
            <li className="sidebar__items nine" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.nine')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2016-2017</li>
            <li className="sidebar__items ten" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.ten')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2017-2018</li>
            <li className="sidebar__items eleven" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.eleven')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2018-2019</li>
            <li className="sidebar__items twelve" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.twelve')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2019-2020</li>
            <li className="sidebar__items thirteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.thirteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2020-2021</li>
            <li className="sidebar__items fourteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.fourteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2021-2022</li>
            <li className="sidebar__items fifteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.fifteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2022-2023</li>
        </div>
        
    
        </>
    )
}

const sidebar = ReactDOM.createRoot(document.querySelector('.sidebar'))
sidebar.render(<SideBar/>)

// Get the content container DOM.
const careerHead = ReactDOM.createRoot(document.querySelector('.career-head'))
const careerMoment = ReactDOM.createRoot(document.querySelector('.career__moment'))
const careerVideo = ReactDOM.createRoot(document.querySelector('.career__video'))
const clubShirts = ReactDOM.createRoot(document.querySelector('.club__shirts'))
const nationShirts = ReactDOM.createRoot(document.querySelector('.nation__shirts'))


careerHead.render(<Header

/>)

careerMoment.render(<CareerMoment

/>)

careerVideo.render(<CareerVideo
/>)

clubShirts.render(<ClubShirts 

/>)

nationShirts.render(<NationShirts

/>)




