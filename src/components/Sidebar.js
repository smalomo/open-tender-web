import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSidebar, toggleSidebar } from '../slices/sidebarSlice'
import {
  incrementItemInCart,
  decrementItemInCart,
  selectCart,
  selectCartQuantity,
  selectCartTotal,
} from '../slices/orderSlice'
// import { iconMap } from '../utils/icons'
import SidebarOverlay from './SidebarOverlay'
import Button from './Button'
import { BuilderOptionWrapper, BuilderQuantity } from './packages'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(selectSidebar)
  const cart = useSelector(selectCart)
  const cartCount = useSelector(selectCartQuantity)
  const cartTotal = useSelector(selectCartTotal)
  // const locationName = useSelector(selectLocationName)
  const classes = `sidebar bg-secondary-color ${isOpen ? 'is-open' : ''}`

  const handleClick = (evt) => {
    evt.preventDefault()
    dispatch(toggleSidebar())
    evt.target.blur()
  }

  return (
    <>
      <SidebarOverlay />
      <div className={classes}>
        <div className="sidebar__container">
          <div className="sidebar__header bg-color">
            {/* <h2 className="ot-font-size-h5">Your Order from {locationName}</h2> */}
            <h2 className="sidebar__title ot-font-size-h3">Your Order</h2>
            <p className="font-size-small secondary-color">
              <span className="ot-bold body-color">{cartCount} items</span> for
              a total of{' '}
              <span className="ot-bold body-color">
                ${cartTotal.toFixed(2)}
              </span>{' '}
              before tax
            </p>
          </div>
          <div className="sidebar__content">
            <ul className="sidebar__cart bg-color border-radius">
              {cart.map((item, index) => {
                return (
                  <li key={`${item.id}-${index}`}>
                    <BuilderOptionWrapper option={item} isCart={true}>
                      <BuilderQuantity
                        item={item}
                        adjust={null}
                        increment={() => dispatch(incrementItemInCart(index))}
                        decrement={() => dispatch(decrementItemInCart(index))}
                        incrementDisabled={item.quantity === item.max}
                        decrementDisabled={
                          item.quantity === Math.max(0, item.min)
                        }
                        classes={null}
                      />
                    </BuilderOptionWrapper>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="sidebar__footer bg-color">
            {/* <Button
              onClick={handleClick}
              icon="ChevronLeft"
              text="Back To Order"
            />
            <Button onClick={handleClick} icon="DollarSign" text="Checkout" /> */}
            <div className="sidebar__back">
              <Button onClick={handleClick} classes="btn btn--big">
                Back To Order
              </Button>
            </div>
            <div className="sidebar__checkout">
              <Button
                onClick={handleClick}
                classes="btn btn--big btn--checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
