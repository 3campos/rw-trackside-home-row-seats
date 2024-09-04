// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Events" titleTo="events" buttonLabel="New Event" buttonTo="newEvent">
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events/{eventId:Int}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{eventId:Int}" page={EventEventPage} name="event" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Addresses" titleTo="addresses" buttonLabel="New Address" buttonTo="newAddress">
        <Route path="/addresses/new" page={AddressNewAddressPage} name="newAddress" />
        <Route path="/addresses/{addressId:Int}/edit" page={AddressEditAddressPage} name="editAddress" />
        <Route path="/addresses/{addressId:Int}" page={AddressAddressPage} name="address" />
        <Route path="/addresses" page={AddressAddressesPage} name="addresses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Rentals" titleTo="rentals" buttonLabel="New Rental" buttonTo="newRental">
        <Route path="/rentals/new" page={RentalNewRentalPage} name="newRental" />
        <Route path="/rentals/{rentalId:Int}/edit" page={RentalEditRentalPage} name="editRental" />
        <Route path="/rentals/{rentalId:Int}" page={RentalRentalPage} name="rental" />
        <Route path="/rentals" page={RentalRentalsPage} name="rentals" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Renters" titleTo="renters" buttonLabel="New Renter" buttonTo="newRenter">
        <Route path="/renters/new" page={RenterNewRenterPage} name="newRenter" />
        <Route path="/renters/{renterId:Int}/edit" page={RenterEditRenterPage} name="editRenter" />
        <Route path="/renters/{renterId:Int}" page={RenterRenterPage} name="renter" />
        <Route path="/renters" page={RenterRentersPage} name="renters" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{userId:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{userId:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
