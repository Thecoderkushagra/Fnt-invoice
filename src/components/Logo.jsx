import {allAsset} from '../assets/asset.js'

const Logo = () => {
    return(
        <img src={allAsset.myLogo} alt="logo" height={50} width={50}/>
    )
}

export default Logo;