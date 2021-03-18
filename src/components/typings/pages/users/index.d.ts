/// <reference types="react" />
import { GetStaticProps } from 'next';
import { User } from '../../interfaces';
declare type Props = {
    items: User[];
};
declare const WithStaticProps: ({ items }: Props) => JSX.Element;
export declare const getStaticProps: GetStaticProps;
export default WithStaticProps;
