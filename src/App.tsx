import { render } from 'solid-js/web';
import { Router, useRoutes } from 'solid-app-router';
// @ts-ignore
import routes from '~solid-pages';

const Routes = useRoutes(routes);

render(
	() => (
		<Router>
			<Routes />
		</Router>
	),
	document.getElementById('root') as HTMLElement
);
