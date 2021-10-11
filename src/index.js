/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ExploreLayout from 'layouts/User/Explore.js';
import SourcesLayout from 'layouts/User/Sources.js';
import MyLibraryLayout from 'layouts/User/MyLibrary.js';
// import AdminLayout from 'layouts/Admin/Admin.js';
// import RTLLayout from 'layouts/RTL/RTL.js';

import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

ReactDOM.render(
	<ThemeContextWrapper>
		<BackgroundColorWrapper>
			<BrowserRouter>
				<Switch>
					<Route path='/User/Explore' render={(props) => <ExploreLayout {...props} />} />
					<Route path='/User/Sources' render={(props) => <SourcesLayout {...props} />} />
					<Route path='/User/MyLibrary' render={(props) => <MyLibraryLayout {...props} />} />
					{/* <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
					<Route path='/rtl' render={(props) => <RTLLayout {...props} />} /> */}
					<Redirect from='/' to='/User/Explore' />
				</Switch>
			</BrowserRouter>
		</BackgroundColorWrapper>
	</ThemeContextWrapper>,
	document.getElementById('root')
);
