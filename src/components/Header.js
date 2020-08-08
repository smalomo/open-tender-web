import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'
import { contains } from '@open-tender/js'
import {
  selectAutoSelect,
  selectCustomer,
  selectRevenueCenterCount,
  selectGroupOrder,
} from '@open-tender/redux'

import HeaderLogo from './HeaderLogo'
import {
  ButtonAccount,
  ButtonAllergens,
  ButtonBackToAccount,
  ButtonCancelEdit,
  ButtonGroupOrder,
  ButtonMenu,
  ButtonRequestedAt,
  ButtonRevenueCenter,
  ButtonServiceType,
  ButtonSignUp,
  ButtonStartOver,
  ButtonLocations,
  ButtonLeaveGroup,
  ButtonGroupGuest,
} from './buttons'

const accountSubPages = ['items', 'orders', 'favorites', 'addresses']

const Header = () => {
  const autoSelect = useSelector(selectAutoSelect)
  const count = useSelector(selectRevenueCenterCount)
  const { profile } = useSelector(selectCustomer)
  const { cartGuest } = useSelector(selectGroupOrder)
  const { pathname } = useLocation()
  const isCheckout = pathname.includes('checkout')
  const isHome = pathname === '/'
  const isRevenueCenterPage = pathname.includes('locations/')
  const isMenu = pathname.includes('menu')
  const isGroupOrder = pathname.includes('join')
  const isAccountSubpage = contains(pathname, accountSubPages)
  const showSignUp = true
  const className = isMobile ? `header ot-dark` : `header`
  const btnClass = isMobile ? 'ot-btn--mobile' : 'ot-btn--header'
  const btnCancelClass = isMobile
    ? 'ot-btn--mobile ot-btn--cancel'
    : 'ot-btn--header ot-btn--cancel'

  return (
    <header className={className}>
      <div className="container">
        <div className="header__container">
          <div className="header__nav">
            {isHome || isRevenueCenterPage || isGroupOrder ? (
              <div className="header__logo">
                <HeaderLogo />
              </div>
            ) : cartGuest ? (
              <ButtonLeaveGroup classes={btnClass} />
            ) : isMenu && !autoSelect && count !== 1 ? (
              <ButtonLocations classes={btnClass} />
            ) : isCheckout ? (
              <ButtonMenu classes={btnClass} />
            ) : isAccountSubpage ? (
              <ButtonBackToAccount classes={btnClass} />
            ) : (
              <ButtonStartOver classes={btnClass} />
            )}
          </div>
          <div className="header__actions">
            {!isGroupOrder && !cartGuest && (
              <ButtonAccount classes={btnClass} />
            )}
            {isHome && !profile && showSignUp && (
              <ButtonSignUp classes={btnClass} />
            )}
            {!isCheckout && !cartGuest && (
              <>
                <ButtonRevenueCenter classes={btnClass} />
                <ButtonServiceType classes={btnClass} />
                <ButtonRequestedAt classes={btnClass} />
              </>
            )}
            {isMenu && (
              <>
                <ButtonAllergens classes={btnClass} />
                <ButtonGroupOrder classes={btnClass} />
                <ButtonGroupGuest />
              </>
            )}
            <ButtonCancelEdit classes={btnCancelClass} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
