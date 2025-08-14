📚 Fundamentals of React Router
1. Introduction to React Router
What it is: A library for handling routing in React applications.

Why use it: Allows navigation between different pages/views without reloading the browser.

Key feature: Client-side routing.

2. Installation & Setup
Install:


npm install react-router-dom
Basic setup in App.jsx:

import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  {/* Routes go here */}
</BrowserRouter>
3. Main Components
<BrowserRouter>

Wraps your app to enable routing using HTML5 history API.

Should be at the root of the app.

<Routes>

A container for all your <Route> elements.

<Route>

Defines a path and the component to render for that path.

<Route path="/about" element={<About />} />
<Link>

Navigation without page reload.


<Link to="/about">Go to About</Link>
<NavLink>

Like <Link> but with active styling when route is active.


<NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
  About
</NavLink>
<Navigate>

Redirect to another route.


<Navigate to="/login" replace />
4. Dynamic Routing (URL Parameters)
Used for routes with variable segments.


<Route path="/user/:id" element={<User />} />
Access params:


import { useParams } from "react-router-dom";
const { id } = useParams();
5. Programmatic Navigation
Navigate via JavaScript instead of links.


import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/home");
6. Nested Routes
Define routes inside another route for layouts or subpages.


<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
</Route>
Render nested routes with <Outlet>.

7. Route Not Found (404 Page)

<Route path="*" element={<NotFound />} />
8. Protected / Private Routes
Restrict access based on authentication.


<Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/login" />} />
9. Search Params & Query Strings
Use useSearchParams to handle query parameters.


const [searchParams, setSearchParams] = useSearchParams();
searchParams.get("name"); // Get query
setSearchParams({ name: "Deep" }); // Set query
10. Differences Between Link & NavLink
Link: Simple navigation, no styling on active.

NavLink: Adds an active class automatically when the route matches.

Topics coverd-
=Browserrouter Routes Route 
404 page Not Found 
nested navigation
Layout and Index Routs
<outlet>
Route Prefixes and group prefixes
Dynamic Routs-userList page  
React Router Optional Segment
