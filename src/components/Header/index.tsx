"use client";
import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";
import HeaderRoot from "./HeaderRoot";

import LogoImage from "/public/images/logo.png";
import HeaderNavigationLi from "./HeaderNavigationLi";
import HeaderNavigationIconContainer from "./HeaderNavigationIconContainer";
import HeaderNavigationIcon from "./HeaderNavigationIcon";
import { ClipboardListIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import HeaderLogoutButton from "./HeaderLogoutButton";
import HeaderNeedAuth from "./HeaderNeedAuth";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartLength } = useCart();

  const handleMenuMobile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderRoot>
      <HeaderLogo logoImage={LogoImage} alt="Logo" />
      <HeaderNavigation isOpen={isOpen} handleMenuMobile={handleMenuMobile}>
        <HeaderNeedAuth>
          <HeaderNavigationLi name="Meus pets" link="/pets" />
          <HeaderNavigationLi name="Agendamentos" link="/agendamentos" />
          <HeaderNavigationLi name="Dashboard" link="/dashboard" />
        </HeaderNeedAuth>

        <HeaderNavigationLi name="Todos produtos" link="/produtos?page=1" />

        <HeaderNavigationIconContainer>
          <HeaderNavigationIcon
            Icon={ShoppingCartIcon}
            link="/carrinho"
            marker={cartLength > 0 ? cartLength : undefined}
          />

          <HeaderNeedAuth>
          <HeaderNavigationIcon Icon={ClipboardListIcon} link="/pedidos" />
            <HeaderLogoutButton />
          </HeaderNeedAuth>
        </HeaderNavigationIconContainer>
      </HeaderNavigation>
    </HeaderRoot>
  );
};

export default Header;
