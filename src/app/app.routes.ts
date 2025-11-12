import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SingleCategory } from './pages/single-category/single-category';
import { TermsAndCondition } from './pages/terms-and-condition/terms-and-condition';
import { SinglePost } from './pages/single-post/single-post';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'category', component: SingleCategory},
    {path: 'post', component: SinglePost},

    {path: 'about', component: AboutUs},
    {path: 'term-conditions', component: TermsAndCondition},
    {path: 'contact', component: ContactUs}
];
