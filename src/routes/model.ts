import { FunctionComponent } from 'react';

export interface Route {
    path: string;
    component: FunctionComponent;
    name: string;
    exact?: boolean;
}
