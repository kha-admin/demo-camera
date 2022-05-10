import { type DehydratedState } from 'react-query';

declare global {
    export interface IPageProps {
        dehydratedState: DehydratedState;
    }
}
