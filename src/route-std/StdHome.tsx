import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const StdHome = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  // console.log('In StdHome', diagConfig);

  return (
		<div>
			<DiagStamp stampText='StdHome' diagConfig={rootContext.diagConfig} />
			<h1>Home page</h1>
		</div>
  );
}
//
export default StdHome;
