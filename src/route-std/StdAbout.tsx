import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const StdAbout = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  return (
		<div>
			<DiagStamp stampText='StdAbout' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render StdAbout')*/ }
			<h1>About page</h1>
			<h3>v 0.0.003</h3>
		</div>
  );
}
//
export default StdAbout;
