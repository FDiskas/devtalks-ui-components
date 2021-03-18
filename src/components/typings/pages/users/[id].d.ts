import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { User } from '../../interfaces';
interface Props {
    item?: User;
    errors?: string;
}
declare const StaticPropsDetail: React.FC<Props>;
export default StaticPropsDetail;
export declare const getStaticPaths: GetStaticPaths;
export declare const getStaticProps: GetStaticProps;
