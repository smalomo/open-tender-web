import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { makeDisplayItem } from '../packages/utils/cart'
import { selectAccountConfigSections } from '../slices/configSlice'
import {
  selectToken,
  selectCustomerFavorites,
  fetchCustomerFavorites,
  selectCustomer,
} from '../slices/customerSlice'
import SectionHeader from './SectionHeader'
import SectionLoading from './SectionLoading'
import SectionError from './SectionError'
import SectionEmpty from './SectionEmpty'
import OrderItemCard from './OrderItemCard'
import SectionFooter from './SectionFooter'

const AccountFavoritesPage = () => {
  const sectionRef = useRef()
  const dispatch = useDispatch()
  const history = useHistory()
  const [favorites, setFavorites] = useState([])
  const {
    favorites: { title, subtitle, empty },
  } = useSelector(selectAccountConfigSections)
  const token = useSelector(selectToken)
  const { account } = useSelector(selectCustomer)
  const { entities, loading, error } = useSelector(selectCustomerFavorites)
  const isLoading = loading === 'pending'

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  useEffect(() => {
    if (!account) return history.push('/')
  }, [account, history])

  useEffect(() => {
    if (error) window.scrollTo(0, sectionRef.current.offsetTop)
  }, [error])

  useEffect(() => {
    dispatch(fetchCustomerFavorites({ token }))
  }, [dispatch, token])

  useEffect(() => {
    const items = entities.map((i) => ({ ...i, item: makeDisplayItem(i.item) }))
    setFavorites(items)
  }, [entities])

  return account ? (
    <>
      <h1 className="sr-only">{title}</h1>
      <div className="sections bg-secondary-color">
        <div ref={sectionRef} className="section container ot-section">
          <div className="section__container">
            <SectionHeader title={title} subtitle={subtitle}>
              <div className="section__header__back">
                <p className="font-size-small">
                  <Link to="/account">Head back to your account page</Link>
                </p>
              </div>
            </SectionHeader>
            <SectionLoading loading={isLoading} />
            <SectionError error={error} />
            <div className="section__content -wide">
              {favorites.length ? (
                <div className="section__items">
                  {favorites.map((favorite) => {
                    return (
                      <div key={favorite.favorite_id} className="section__item">
                        <OrderItemCard item={favorite.item} />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <SectionEmpty message={empty} />
              )}
            </div>
            <SectionFooter>
              <Link to="/account">Head back to your account page</Link>
            </SectionFooter>
          </div>
        </div>
      </div>
    </>
  ) : null
}

AccountFavoritesPage.displayName = 'AccountFavoritesPage'
export default AccountFavoritesPage
