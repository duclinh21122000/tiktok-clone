import { HeaderOnly } from '@/components/Layout';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Upload from '@/pages/Upload';

type PublishRoutes = {
    path: string;
    component: any;
    layout?: any;
};

const publishRoutes: PublishRoutes[] = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// const privateRoutes = [];

export { publishRoutes };
