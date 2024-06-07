import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const StdError404 = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  return (
		<div>
			<DiagStamp stampText='StdError404' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render StdError404')*/ }
			<h1>Page not found</h1>
			<h3>Please try again</h3>
			<h3>Error 404</h3>
		</div>
  );
}
//
export default StdError404;
