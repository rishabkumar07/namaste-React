# namaste-React
Learning React and doing some cool projects


# Parcel
- Dev-build
- Local Server
- Auto refresh (HMR) - Hot Module Replacement, 
 by using file watching algo written inn C++
- Bundles
- Compressing
- Cache
- Image Optimization
- Prod Build & Dev Build
- Tree Shaking - Remove unused codes
- Consistent Hashing
- Code Splitting
- Differential Bundling - Helps in running the hosted app in older browser versions as well (using browsersList)
- Diagnostics - Good Error Handling


/*Low Level Planning

1) Header
    - Logo
    - Nav Items(Home, About Us, Cart)

2) Body
    - Search
    - RestaurantContainer
        - Image
        - Name Of Rest, Rating, Cuisine, ETA(delivery time)

3) Footer
    - Copyright
    - Links
    - Address
    - Contact Info
*/

Two types of import & export -
1) Default import/export
2) Named import/export

# Redux Toolkit (RTK) -

- Install React-Redux & Redux Toolkit
- Build our Store
- Connect our store to app
- Slice(Cart Slice)
- Dispatch(Action)
- Selector

# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom (for toBeInTheDocument function)
