import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import UseExample1 from "../components/UseExample1/UseExample1";
import MainLayout from "../layout/MainLayout";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import UseExample2 from '../components/UseExample2/UseExample2';
import UseExample3 from '../components/UseExample3/UseExample3';
import UseExampleContext from '../components/UseExampleContext/UseExampleContext';
import ActionExample1 from '../components/ActionExample1/ActionExample1';
import { ActionExample2 } from '../components/ActionExample2/ActionExample2';
import UseFormStateExample from '../components/UseFormStateExample/UseFormStateExample';
import UseOptimisticExample from '../components/UseOptimisticExample/UseOptimisticExample';
import UseTransitionExample from '../components/UseTransitionExample/UseTransitionExample';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path='use-example-1' element={<UseExample1 />} />
            <Route path='use-example-2' element={<UseExample2 />} />
            <Route path='use-example-3' element={<UseExample3 />} />
            <Route path='use-example-context' element={<UseExampleContext />} />
            <Route path='action-example-1' element={<ActionExample1 />} />
            <Route path='action-example-2' element={<ActionExample2 />} />
            <Route
                path='useFormState'
                element={
                    <>
                        <UseFormStateExample
                            itemID='1'
                            itemTitle='Cart 1'
                        />
                        <UseFormStateExample
                            itemID='2'
                            itemTitle='Cart 2'
                        />
                    </>
                }
            />
            <Route path='useOptimisticExample' element={<UseOptimisticExample />} />
            <Route path='useTransitionExample' element={<UseTransitionExample />} />
        </Route>
    )
)