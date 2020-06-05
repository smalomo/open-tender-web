export const defaultConfig = {
  brand: {
    logo: 'http://s3.amazonaws.com/betterboh/u/img/local/2/1589984577_logo.png',
    title: 'Open Tender',
  },
  googleMaps: {
    apiKey: 'AIzaSyCkllc7M-cYNzSRXO7KE-ZZKTPW59RroDk',
    defaultCenter: { lat: 40.7572285, lng: -73.9729147 },
    zoom: 14,
    // styles: {
    //   labelColor: '#5a5aff',
    //   roadColor: '#edeaff',
    //   featureColor: '#edeaff',
    //   waterColor: '#cbe9fd',
    //   backgroundColor: '#f6f5ff',
    // },
    styles: {
      labelColor: '#666666',
      // roadColor: '#e4e9f2',
      // featureColor: '#e4e9f2'
      roadColor: '#eaeef4',
      featureColor: '#eaeef4',
      waterColor: '#dee5ef',
      backgroundColor: '#f5f7fa',
    },
    icons: {
      user: {
        // url:
        //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271579_map-marker_red-dark-red_120x160.png',
        //  size: { width: 30, height: 40 },
        //  anchor: null,
        // url:
        //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590781979_marker-blinking-static_purple_120x120.png',
        url:
          'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590782366_marker-blinking-static_purple-25_120x120.png',
        size: { width: 70, height: 70 },
        anchor: { x: 35, y: 35 },
      },
      active: {
        url:
          'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271604_map-marker_black_120x160.png',
        size: { width: 30, height: 40 },
        anchor: null,
      },

      inactive: {
        url:
          'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271631_map-marker_purple_120x160.png',
        size: { width: 30, height: 40 },
        anchor: null,
      },
    },
  },
  home: {
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588197308_asian-food-spread-top-down_color_1800x1200.jpg',
    title: 'How can we help you today?',
    subtitle: "Let's get started, shall we?",
    content: 'Select an order type from the options below.',
    buttons: {
      pickup: 'Order for Pickup',
      delivery: 'Order for Delivery',
      catering: 'Order Catering',
    },
  },
  locations: {
    title: "Let's find the nearest location",
    subtitle: "We'll make this quick",
    content: 'Please enter a zip code or address below.',
    statusMessages: {
      CLOSED_TEMPORARILY:
        'This location is temporarily closd due to technical or operational difficulties. Please try back later today or tomorrow.',
      COMING_SOON:
        "This location isn't accepting orders yet, but it will be soon!",
    },
    maxDistance: 100,
    autoSelect: {
      OLO: {
        PICKUP: false,
        DELIVERY: false,
      },
      CATERING: {
        PICKUP: false,
        DELIVERY: true,
      },
      MERCH: {
        PICKUP: true,
        DELIVERY: true,
      },
    },
  },
  menu: {
    // background:
    //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588303325_976877dbfac85a83d9e9.jpg',
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588456921_burger-with-knife-black-napkin_flipped-cropped_2400x800.jpg',
    // background:
    //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588457434_66172f8cf5eeae2433bd.jpg',
    soldOut: {
      image: null,
      message: 'Sold Out For The Day',
    },
    validate: {
      title: 'Invalid Items in Cart',
      subtitle: 'Uh oh. Certain items in your cart are no longer valid.',
      proceed: {
        message: 'Please click the button below to proceed.',
        buttonProceed: 'Proceed to New Menu',
      },
      revert: {
        message:
          'Please either proceed to this new menu or switch back to your previous menu.',
        buttonProceed: 'Proceed to New Menu',
        buttonRevert: 'Back to Previous Menu',
      },
    },
  },
  checkout: {
    title: "Let's get you checked out",
    subtitle: '',
    check: {
      title: 'Order Summary',
    },
    details: {
      title: 'Please review your order details',
    },
    address: { title: 'Confirm your address' },
    sign_up: {
      title: 'Wanna create an account?',
      subtitle:
        'Order history, saved favorites & allergens, saved credit cards, and much more. Signing up takes two seconds - start reaping the benefits today!',
    },
    guest: {
      title: 'Or continue to checkout as a guest',
    },
    account: {
      title: 'Nice to see you again!',
    },
    discounts: {
      title: 'Redeem your loyalty rewards',
      subtitle: 'Apply one or more discounts below.',
    },
    promoCodes: {
      title: 'Apply a promo code',
      subtitle: 'Enter a promo code below & hit the apply button',
    },
    giftCards: {
      title: 'Apply a gift card',
      subtitle: 'Apply an existing gift card or add a new one',
    },
    tenders: {
      title: 'How would you like to pay?',
      subtitle: 'Please add one or more payments below',
    },
  },
  account: {
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590860635_633edb149568073f51aa.jpg',
    title: 'Welcome Back',
    subtitle: 'How can we help you today?',
    sections: {
      accountDetails: {
        title: 'Account Details',
        subtitle:
          'Below is the info we have on file for you. Make updates at any time.',
      },
      allergens: {
        title: 'Allergens',
        subtitle:
          "Select any allergens that you'd like for us to highlight on the menu when you're placing an order.",
      },
      addresses: {
        title: 'Addresses',
        subtitle:
          "Below are the last 5 addressed from which you've ordered. To add a new address, start a new order and enter a new address.",
      },
      giftCards: {
        title: 'Gift Cards',
        subtitle: 'A list of your active gift cards.',
        empty: "Looks like you hanen't purchased any gift cards yet.",
      },
      creditCards: {
        title: 'Credit Cards',
        subtitle:
          'A list of the credit cards you have on file with us. Change your default, delete a card, or add a new one.',
        empty:
          "Looks like you haven't saved any cards to your account yet. Use the link below to add a new card.",
      },
      loyalty: {
        title: 'Loyalty',
        subtitle:
          'A summary of your active loyalty programs and any available discounts.',
      },
      favorites: {
        title: 'Favorites',
        subtitle:
          "Below are the items you've favorited. You can add more favorites by reviewing your past order details.",
      },
      recentOrders: {
        title: 'Recent Orders',
        subtitle:
          'Make changes to upcoming orders, reorder past orders, and add order ratings & comments',
        empty: "Looks like you don't have any recent orders",
      },
      // upcomingOrders: {
      //   title: 'Upcoming Orders',
      //   subtitle: 'Review & update orders that have yet to be fulfilled',
      //   empty: "Looks like you don't currently have any upcoming orders",
      // },
      // pastOrders: {
      //   title: 'Recent Orders',
      //   subtitle: 'Reorder a past order, view details, and add ratings',
      //   empty: "Looks like you don't currently have any past orders",
      // },
    },
  },
  addresses: {
    title: 'Your Addresses',
    subtitle:
      "Below are all of the addresses from which you've ordered in the past. To add a new address, start a new order and enter a new address.",
  },
}
