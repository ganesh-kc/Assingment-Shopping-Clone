import { createRouter, createWebHistory } from "vue-router";
import SignUpComponent from '../view/SignUpComponent.vue'
import SignInComponent from '../view/SignInComponent.vue'
import MainComponent from '../view/MainComponent.vue'
import CartComponent from '../view/CartComponent.vue'
import WishComponent from '../view/WishComponent.vue'


const isAuth = localStorage.getItem('isAuth');
const routes=[
    {
        name: "signup",
        path: "/",
        component: SignUpComponent,   
 },
    {
        name: "signin",
        path: "/signin",
        component: SignInComponent      
    },
    {
        name: "maincomponent",
        path: "/maincomponent",
        component: MainComponent, 
        beforeEnter(to:any,from:any,next:any){
            const isAuth = JSON.parse(window.localStorage.isAuth)
            if(isAuth){
                next()
            }else{
                next("")
            }     
        }
    },
    {
        name: "cartcomponent",
        path: "/cartcomponent",
        component: CartComponent, 
        beforeEnter(to:any,from:any,next:any){
            const isAuth = JSON.parse(window.localStorage.isAuth)
            if(isAuth){
                next()
            }else{
                next("/")
            }     
        }      
    },
    {
        name: "wishcomponent",
        path: "/wishcomponent",
        component: WishComponent, 
        beforeEnter(to:any,from:any,next:any){
            const isAuth = JSON.parse(window.localStorage.isAuth)
            if(isAuth){
                next()
            }else{
                next("/")
            }     
        }      
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

//----------------------------------IMPORTANT---------------------------
 router.beforeEach( (to, from) => {
            if (isAuth && (to.name === 'signin' || to.name === 'signup')) {
              return { name: 'maincomponent' }
            }
          })
//----------------------------------------------------------------------


export default router;
