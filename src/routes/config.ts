import { Route } from './model';
import ChartComponent from "../components/chart/ChartComponent";
import TableComponent from "../components/table/TableComponent";
import DefaultComponent from "../components/default/DefaultComponent";

export const routes: Route[] = [
    {
        path: '/',
        component: DefaultComponent,
        name: 'Home',
    },
    {
        path: '/chart',
        component: ChartComponent,
        name: 'Chart',
    },
    {
        path: '/table',
        component: TableComponent,
        name: 'Table',
    },
];
