import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Router, useRoutes } from 'solid-app-router';
// @ts-ignore
import routes from '~solid-pages';

const Routes = useRoutes(routes);

/*
const Routes = useRoutes([
	{
		path: '/',
		component: lazy(() => import('./routes/index'))
	},
	{
		path: '/privacy',
		component: lazy(() => import('./routes/privacy'))
	}

	//	{
	//		path: '/*all',
	//		component: lazy(() => import('/pages/[...all].js'))
	//	}
]);
*/

render(
	() => (
		<Router>
			<Routes />
		</Router>
	),
	document.getElementById('app') as HTMLElement
);
