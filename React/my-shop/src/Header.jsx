import { ShoppingCart, User , Search } from "lucide-react";
import Logo from './components/layout/logo';
function Header(){
    
return(
    <header>
        <div>
        <a href="/" aria-label="MyShop">
            <Logo />
        </a>
            <nav>
                <a href="/" >Home</a>
                <a href="/">Shop</a>
            </nav>
            <form>
                <Search />
                <input type="search"  placeholder="
                Search product in this app" aria-label="search products"/>
            </form>
            <div>
                <a href="/login" aria-label="Sign In">
                    <User />
                </a>
                <a href="/cart" aria-label="Cart">
                <ShoppingCart />
                <span>0</span>
                </a>
            </div>
        </div>
    </header>
)

}

export default Header;